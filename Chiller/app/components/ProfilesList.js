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

async componentDidMount() {
  user = await firebase.auth().currentUser;
  }

  mapUsers= users => (
    users.map(user => {
      if (user.images[0]) {
      return(
        <View>
          <Text>{user.details.username}</Text>
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode='cover'
          source={{
            uri: `${user.images.image1.url}`
          }}
        />
        </View>
      )
    }
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
            <TouchableHighlight onPress={() => this.props.navigator.push({name: "User Profile"})}>
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
          />
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
