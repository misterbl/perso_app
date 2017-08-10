import React  from 'react';
import PhotoUpload from 'react-native-photo-upload'
import ReactNative from 'react-native';
import { StackNavigator } from 'react-navigation';
import RNFetchBlob from 'react-native-fetch-blob'
//import * as firebase from "firebase";
import RNFS from 'react-native-fs';
import firebase from '../firebase/firebase'
import { connect } from 'react-redux';
import DismissKeyboard from "dismissKeyboard";
import { Card, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Picker, Image, ScrollView, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { setProfile, retrieveProfile, assign, setCity, setUsername, setAge } from '../actions/profileActions.js'
import Database from "../firebase/database";
import AgePicker from './AgePicker';
import { Header } from './HomeScreen'
//import Image from './Image'
const Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
let _this;
let user;
let currentImage = "https://firebasestorage.googleapis.com/v0/b/chiller-58d16.appspot.com/o/images%2F1501345522766?alt=media&token=5e46d8be-5677-4e9c-b434-db7e277c5e8c"

class CreateProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imagesUrl: [{
        url: currentImage,
        _key: 1
      }],
      usernameInput: "",
      ageInput: null,
      cityInput: "",
      latitude: null,
      longitude: null,
      error: null,
      arr: [],
      profileSaved: false,
      image: {string: null, avatar: {origURL: this.props.profile.uri, data: null}},
    }
  }

  componentWillMount() {
    _this = this;
    navigator.geolocation.getCurrentPosition(
          (position) => {
            _this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => _this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
}

  async componentDidMount() {
    user = await firebase.auth().currentUser;
    this.props.profile.currentUser = user;
      let tasksRef = firebase.database().ref("/user/" + user.uid + "/images");
    this.listenForTasks(tasksRef);
      Database.getImages(user.uid)
      // let usersRef = firebase.database().ref("/user/");
      // this.listenForUsers(usersRef);
      // let messagesRef = firebase.database().ref("/user/" + user.uid + "/messages");
      // this.listenForMessages(messagesRef);
  }
  listenForUsers(tasksRef) {
  tasksRef.on('value', (dataSnapshot) => {
  dataSnapshot.forEach((child) => {
    this.props.profile.users.push({
      details: child.val().details,
      images: child.val().images,
      _key: child.key
    });
  });
  });
  }

  listenForTasks(tasksRef) {
  tasksRef.on('value', (dataSnapshot) => {
    dataSnapshot.forEach((child) => {
      this.props.profile.images.push({
        url: child.val().url,
        _key: child.key
      });
    });
  });
  }

  listenForMessages(messagesRef) {
    messagesRef.on('value', (dataSnapshot) => {
      dataSnapshot.forEach((child) => {
        this.props.profile.messages.push({
          from: child.val().from,
          image: child.val().image,
          name: child.val().name,
          position: child.val().position,
          text: child.val().text,
          uniqueId: child.key
        });
      });
      });
  }

assign(username, age, city, latitude, longitude, error) {
    this.state.profileSaved = true;
  this.props.profile.latitude = latitude;
  this.props.profile.longitude = longitude;
  this.props.profile.error = error;
  this.props.profile.username = username;
    this.props.profile.age = age;
    this.props.profile.city = city;

}

returnProfile(name, age, city) {
  this.props.assign(this.state.latitude, this.state.longitude, this.state.error);
  this.state.profileSaved = true;
}
//
// makeAgeArray(min, max) {
//   while(min <= max){ this.state.arr.push(min++);};
//   this.mapAge()
// }
//
// mapAge(){
// return this.state.arr.map((age) => {
//   return(
//     <Picker.Item label="Java" value="java" />
//   )
// })
// }

    saveUsername() {
        if (this.state.usernameInput) {
            Database.setUsername(user.uid, this.state.usernameInput, this.state.cityInput, this.state.ageInput);
            //this.getImage();
            Database.uploadImage(user.uid, this.props.profile.image.uri)
            DismissKeyboard();
        }

          this.props.setCity(this.state.cityInput);
           this.props.setUsername(this.state.usernameInput);
          this.props.setAge(this.state.ageInput);
          alert("saved")
        }

        // imagesRef.putString(message).then(function(snapshot) {
        //   console.log('Uploaded a data_url string!');
        // });
  //       var metadata = {
  //         contentType: 'image/jpeg',
  // };
  // imagesRef.putString(message, 'base64').then(function(snapshot) {
  // console.log('Uploaded a base64 string!');
// });
        //imagesRef.put(this.state.avatar);


getImage() {
//   var storageRef = firebase.storage().ref('images');
//   storageRef.getDownloadURL().then(function(url) {
//
//
//    currentImage = `${url}`;
//    console.log("currentImage", currentImage);
//
//
// });
};

// getImage(){
//   // Create a reference to the file we want to download
// var starsRef = firebase.storage().ref().child('images/1501072232968');
//
// // Get the download URL
// starsRef.getDownloadURL().then(function(url) {
//   <Image   source={{
//       uri: url
//     }}/>
// }).catch(function(error) {
//
//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object_not_found':
//       // File doesn't exist
//       break;
//
//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;
//
//     case 'storage/canceled':
//       // User canceled the upload
//       break;
//
//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });
// }
  render() {
    return (
       <View style={{backgroundColor: '#f7f391'}}>
         <View  style={{ marginTop: 40}}>
           <Header {...this.props}/>
           </View>
      <Card containerStyle={{marginTop: 40, backgroundColor: "white"}} title="Create your profile" >
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              alert('Image base64 string: ', avatar);
                // this.setState({image:{avatar: avatar}});
                this.setState({image:{avatar: {origURL:this.props.profile.image.origURL}}});

                //this.setState({image:{avatar: {data: avatar.data}}})

              };
            }
          }>
          <Image
            style={{
              paddingVertical: 30,
              width: 20,
              height: 20,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/chiller-58d16.appspot.com/o/images%2F1501345522766?alt=media&token=5e46d8be-5677-4e9c-b434-db7e277c5e8c"
            }}
          />
        </PhotoUpload>
         {/* <Text>{this.state.image.avatar}</Text> */}
        {/* <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode='cover'
          source={{
            uri: `${this.state.image.avatar.origURL}`
          }}
        /> */}
        {currentImage &&
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: currentImage
            }}
          />
         }
        <FormInput
          placeholder='username'
          onChangeText={ (usernameInput) => this.setState({usernameInput}) }
           value={this.state.usernameInput}
        />
        <View style={{ backgroundColor: "red"}}>

        </View>
        <Picker
          selectedValue={this.state.ageInput}
        onValueChange={(itemValue, itemIndex) => this.setState({ageInput: itemValue})}>
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
          <Picker.Item label="32" value="32" />
          <Picker.Item label="33" value="33" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="41" value="41" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="46" value="46" />
          <Picker.Item label="46" value="46" />
          <Picker.Item label="47" value="47" />
          <Picker.Item label="48" value="48" />
          <Picker.Item label="49" value="49" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="51" value="51" />
          <Picker.Item label="52" value="52" />
          <Picker.Item label="53" value="53" />
          <Picker.Item label="54" value="54" />
          <Picker.Item label="55" value="55" />
          <Picker.Item label="56" value="56" />
          <Picker.Item label="57" value="57" />
          <Picker.Item label="58" value="58" />
          <Picker.Item label="59" value="59" />
          <Picker.Item label="60" value="60" />
          <Picker.Item label="61" value="61" />
          <Picker.Item label="62" value="62" />
        </Picker>
        <FormInput
          placeholder='city'
          onChangeText={ (cityInput) => this.setState({cityInput}) }
            value={this.state.cityInput}
        />
        <View>
          <TouchableHighlight style={{marginTop: 20}} onPress={ () => this.saveUsername()} >
            <Text>Save Profile!</Text>
          </TouchableHighlight>
        </View>
        <View>
          { this.state.profileSaved && <Text style={{ color: "red", fontSize: 20, fontWeight: 'bold' }}>Profile saved! </Text>}
        </View>
      </Card>
      </View>
    );
  }

}
const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setProfile,
  retrieveProfile,
  assign,
  setCity,
  setUsername,
  setAge
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(CreateProfile);
