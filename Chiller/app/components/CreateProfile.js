import React  from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Picker, ScrollView, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { setProfile, retrieveProfile, assign } from '../actions/profileActions.js'
import AgePicker from './AgePicker';
import { Header } from './HomeScreen'

let _this;
class CreateProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernameInput: "",
      ageInput: null,
      cityInput: "",
      latitude: null,
      longitude: null,
      error: null,
      arr: [],
      profileSaved: false,
    }
  }

  componentWillMount() {
    _this = this;
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
  // this.props.setProfile(name, age, city);
  // this.props.retrieveProfile(name);
  this.props.assign(this.state.latitude, this.state.longitude, this.state.error);
  this.state.profileSaved = true;
}

makeAgeArray(min, max) {
  while(min <= max){ this.state.arr.push(min++);};
  this.mapAge()
}

mapAge(){
return this.state.arr.map((age) => {
  return(
    <Picker.Item label="Java" value="java" />
  )
})
}
  render() {
    return (
       <View style={{backgroundColor: '#f7f391'}}>
         <View  style={{ marginTop: 40}}>
           <Header {...this.props}/>
           </View>
      <Card containerStyle={{marginTop: 40, backgroundColor: "white"}} title="Create your profile" >
        <FormInput
          placeholder='username'
          onChangeText={ (usernameInput) => this.setState({usernameInput}) }
          value={this.state.usernameInput}
        />

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
          <TouchableHighlight style={{marginTop: 20}} onPress={ () => this.props.navigator.push({
                name: "Profiles List"
            }) }>
            <Text>Save Profile!</Text>
          </TouchableHighlight>
        </View>
        <View>
          { this.state.profileSaved && <Text style={{ color: "red", fontSize: 20, fontWeight: 'bold' }}>Profile saved! </Text>}
          <Text> Username is: {this.state.usernameInput}</Text>
            <Text> Age: {this.state.ageInput} </Text>
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
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(CreateProfile);
