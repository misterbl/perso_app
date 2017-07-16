import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;
import { setProfile } from '../actions/profileActions.js'


class ProfilesList extends Component {
  static navigationOptions = {
    title: 'List of profiles',
  };
  render() {
    console.log(this);
    return (
      <View style={{ height: 30, marginTop: 50 }}>
          <Text>Your Profile:</Text>
          <Text> Username: {this.props.profile.username} </Text>
            <Text> Age: {this.props.profile.age} </Text>
              <Text> City: {this.props.profile.city} </Text>
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
