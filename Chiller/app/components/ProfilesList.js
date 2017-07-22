import React, { Component } from 'react';
import ReactNative from 'react-native';
//import Realm from 'realm';
import { connect } from 'react-redux';
import {
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

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f7f391'}}>
        <View  style={{ marginTop: 40}}>
          <Header {...this.props}/>
          </View>
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
  </View>
    );
  }

}
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
