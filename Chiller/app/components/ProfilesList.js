import React, { Component } from 'react';
import ReactNative from 'react-native';
import firebase from '../firebase/firebase'

//import Realm from 'realm';
import { connect } from 'react-redux';
import {
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Button,
}  from 'react-native';
import { setProfile, assign } from '../actions/profileActions.js'
import { Header } from './HomeScreen'

class ProfilesList extends Component {

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
    console.log(this);
    user = await firebase.auth().currentUser;
    this.props.profile.currentUser = user;
      let tasksRef = firebase.database().ref("/user/" + user.uid + "/images");
    this.listenForTasks(tasksRef);
      Database.getImages(user.uid)
      let usersRef = firebase.database().ref("/user/");
      this.listenForUsers(usersRef);
      let messagesRef = firebase.database().ref("/user/" + user.uid + "/messages");
      this.listenForMessages(messagesRef);
  }
  listenForUsers(tasksRef) {
  tasksRef.on('value', (dataSnapshot) => {
  dataSnapshot.forEach((child) => {
    this.props.profile.users.push({
      details: child.val().details,
      images: child.val().images,
      key: child.key
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
    messagesRef.once('value', (dataSnapshot) => {
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

  mapUsers= users => (
    users.map(user => {
      let imageKey = Object.keys(user.images)[0]
      let image = user.images[imageKey]
      return(
        <View key={user.key}>
          <Text>{user.details.username}</Text>
          <TouchableHighlight onPress={() => this.props.navigator.push({name: "User Profile", passProps: { userChatting: user}})}>
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode='cover'
          source={{
            uri: `${image.url}`
          }}
        />
        </TouchableHighlight>
        </View>
      )
    }
  )
)

  render() {
    const style= {justifyContent: "flex-start", flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-start" };
    //if (this.props.profile.users) {console.log("hello", this.props.profile.users[0].images.image1.url)};
    return (
      <View style={{flex: 1, backgroundColor: '#f7f391'}}>
        <View  style={{ marginTop: 40}}>
          <Header {...this.props}/>
          </View>
          <View style={style}>
            {this.props.profile.users && this.mapUsers(this.props.profile.users)}
            {/* <TouchableHighlight onPress={() => this.props.navigator.push({name: "User Profile"})}>
          <Image
            style={{
              margin: 10,
              padding: 40,
              width: null,
              height: null
            }}
            resizeMode='cover'
            source={require('../assets/userAvatar.png')}
          />
            </TouchableHighlight>
          <Image
            style={{
              margin: 10,
              padding: 40,
              width: null,
              height: null
            }}
            resizeMode='cover'
            source={require('../assets/userAvatar.png')}
          />
          <Image
            style={{
              margin: 10,
              padding: 40,
              width: null,
              height: null
            }}
            resizeMode='cover'
            source={require('../assets/userAvatar.png')}
          /> */}
          </View>
            </View>
              );
            }
          }
    {/* <ScrollView style={{height: "80%" }}> */}
      {/* {realm.objects('User').map((user) => (
        <View>
          <Text> Username: {user.name} </Text>
          <Text> Age: {user.age} </Text>
          <Text> City: {user.city} </Text>
          <Button
            onPress={() => navigate('UserProfile', { user: `${user.name}` })}
            title="View profile"
          />
        </View>
        ))} */}
  {/* </ScrollView> */}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setProfile,
  assign,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(ProfilesList);
