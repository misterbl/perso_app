/**
* @class Database
*/
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { connect } from 'react-redux';
import * as firebase from "firebase";

let currentUrl = 5;
class Database {

  /**
  * Sets a users mobile number
  * @param userId
  * @param mobile
  * @param images
  * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
  */
  static setUserMobile(userId, mobile) {

    let userMobilePath = "/user/" + userId + "/details";

    return firebase.database().ref(userMobilePath).set({
      mobile: mobile
    })

  }
  static setImageUrl(userId, url) {
    let userImagePath = "/user/" + userId + "/images";
    let postData = { url: url, userId: userId };
    return firebase.database().ref(userImagePath).push(postData);
  }

  // static setMessages(message, user) {
  //   let userImagePath = "/user/" + user.uid + "/messages";
  //   let postData = {
  //     text: `${message.text}`,
  //     name: `${user.uid}`,
  //     from: '',
  //     image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
  //     position: 'right',
  //     date: new Date(),
  //   };
  //   return firebase.database().ref(userImagePath).push(postData);
  // }

  static setMessages(message, user, userChatting) {
    let messagesUserPath = "/messages/" + user.uid + userChatting.key;
    let messagesUserChattingPath = "/messages/" + userChatting.key + user.uid ;
    let postData = {
      text: `${message.text}`,
      name: `${user.username}`,
      from: `${user.uid}`,
      to: `${userChatting.key}`,
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
      position: 'right',
      date: new Date(),
    };
    return firebase.database().ref(messagesUserPath).push(postData) && firebase.database().ref(messagesUserChattingPath).push(postData) ;
  }
  static getMessages(user) {
    let userMessagesPath = "/user/" + user.uid + "/messages";
    return ref;
  }

  static setUsername(userId, username, city, age) {

    let userUsernamePath = "/user/" + userId + "/details";

    return firebase.database().ref(userUsernamePath).set({
      city: city,
      username: username,
      age: age,
    })

  }

  /**
  * Listen for changes to a users mobile number
  * @param userId
  * @param callback Users mobile number
  */
  static listenUserMobile(userId, callback) {

    let userMobilePath = "/user/" + userId + "/details";

    firebase.database().ref(userMobilePath).on('value', (snapshot) => {

      var mobile = "";

      if (snapshot.val()) {
        mobile = snapshot.val().mobile
      }

      callback(mobile)
    });
  }

  static uploadImage(userId, uri, mime = 'application/octet-stream') {
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      //const uploadUri =   uri.replace('file://', '')
      const sessionId = new Date().getTime()
      let uploadBlob = null
      const imageRef = firebase.storage().ref('images').child(`${sessionId}`)
      RNFS.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(uploadBlob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
        this.setImageUrl(userId, url)
      })
      .catch((error) => {
        reject(error)
      })
    })
  }

  static getImages(userId) {
    let userImagePath = "/user/" + userId + "/images";
    //var userId = firebase.auth().currentUser.uid;
    let ref = firebase.database().ref(userImagePath)
    return ref[0];

    // return firebase.database().ref(userImagePath).once('value').then(function(snapshot) {
    //   const imageUrl = snapshot.val().url;
    //   console.log("hello", imageUrl);
    // });
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(Database);
//module.exports = Database;
