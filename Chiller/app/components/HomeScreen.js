import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';
// import { Header } from './Header'
let _this;

export class Header extends React.Component {

  render() {
    console.log(this);
    return (
      <View style={{flex: 1, flexDirection: 'row' }}>
        <Icon style={{ marginLeft: 60, width: 100, height: 50, backgroundColor: "transparent" }}
               name='person' onPress={() => this.props.navigator.push({name: "Create Profile"})} />
        <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.props.navigator.push({name: "Profiles List"})} />
        <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.props.navigator.push({name: "Profiles List"})} />
     </View>
    );
  }

}
export class HomeScreen extends React.Component {
  componentWillMount() {
    _this = this;
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f7f391'}}>
      <Button
        onPress={() => this.props.navigator.push({name: "Create Profile"})}
        title="Create a profile"
      />
      <Button
        onPress={() => this.props.navigator.push({name: "Profiles List"})}
        title="List of profiles"
      />
    </View>
    )
  }
}
