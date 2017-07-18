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
import { setProfile, retrieveProfile, assign } from '../actions/profileActions.js'

class CreateProfile extends Component {
  static navigationOptions = {
    title: 'Create a Profile',
  };

  constructor(props){
    super(props);
    this.state = {
      usernameInput: "",
      ageInput: null,
      cityInput: "",
      latitude: null,
      longitude: null,
      error: null,
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
}

returnProfile(name, age, city) {
  this.props.setProfile(name, age, city);
  this.props.retrieveProfile(name);
  this.props.assign(this.state.latitude, this.state.longitude, this.state.error);
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
          <TouchableHighlight style={{marginTop: 20}} onPress={ () => this.returnProfile(this.state.usernameInput, parseInt(this.state.ageInput), this.state.cityInput) }>
            <Text>Save Profile!</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>Your Profile:</Text>
          <Text> Username: {this.state.usernameInput} </Text>
            <Text> Age: {this.state.ageInput} </Text>
              <Text> City: {this.state.cityInput} </Text>
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
  retrieveProfile,
  assign,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(CreateProfile);
