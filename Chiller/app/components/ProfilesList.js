import React, { Component } from 'react';
import ReactNative from 'react-native';
import Realm from 'realm';
import { connect } from 'react-redux';
const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;
import { setProfile, realm } from '../actions/profileActions.js'

class ProfilesList extends Component {
  static navigationOptions = {
    title: 'List of profiles',
  };
  render() {
    console.log(realm.objects('User')[0]);

    return (
    <View>
      {realm.objects('User').map((user) => (
        <View>
          <Text>Your Profile:</Text>
          <Text> Username: {user.name} </Text>
          <Text> Age: {user.age} </Text>
          <Text> City: {user.city} </Text>
        </View>
        ))}
  </View>
    );
  }

}
const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setProfile,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(ProfilesList);
