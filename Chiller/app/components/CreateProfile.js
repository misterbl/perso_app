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


class CreateProfile extends Component {
  static navigationOptions = {
    title: 'Create a Profile',
  };
  constructor(props){
    super(props);
    this.state = { usernameInput: "", ageInput: null, cityInput: "" }
  }
returnProfile(name, age, city) {
  console.log("save");
  this.props.setProfile(name, age, city);
}
  render() {
    return (
      <View style={{ height: 30, marginTop: 50 }}>
        <TextInput
          returnKeyType='search'
          placeholder='username'
          onChangeText={ (usernameInput) => this.setState({usernameInput}) }
          value={this.state.usernameInput}
        />
        <TextInput
          returnKeyType='search'
          placeholder='age'
          onChangeText={ (ageInput) => this.setState({ageInput}) }
          value={this.state.ageInput}
        />
        <TextInput
          returnKeyType='search'
          placeholder='city'
          onChangeText={ (cityInput) => this.setState({cityInput}) }
          value={this.state.cityInput}
        />
        <View>
          <TouchableHighlight style={{marginTop: 20}} onPress={ () => this.returnProfile(this.state.usernameInput, this.state.ageInput, this.state.cityInput) }>
            <Text>Save Profile</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>Your Profile:</Text>
          <Text> Username: {this.props.profile.username} </Text>
            <Text> Age: {this.props.profile.age} </Text>
              <Text> City: {this.props.profile.city} </Text>
        </View>
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
           )(CreateProfile);
