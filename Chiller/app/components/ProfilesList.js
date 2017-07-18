import React, { Component } from 'react';
import ReactNative from 'react-native';
import Realm from 'realm';
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
import { setProfile, realm, assign } from '../actions/profileActions.js'

class ProfilesList extends Component {
  static navigationOptions = {
    title: 'List of profiles',
  };
componentDidMount() {
  console.log(this);
  navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  });
}
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      {realm.objects('User').map((user) => (
        <View>
          <Text> Username: {user.name} </Text>
          <Text> Age: {user.age} </Text>
          <Text> City: {user.city} </Text>
          <Button
            onPress={() => navigate('UserProfile', { user: `${user.name}` })}
            title="View profile"
      />
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
  assign,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(ProfilesList);
