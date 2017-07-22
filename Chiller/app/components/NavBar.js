import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


class NavBar extends React.Component {
  static navigationOptions = {
    title: 'Navbar',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
       <View style={{flex: 1, flexDirection: 'row'}}>
      <Icon style={{ marginLeft: 60, width: 100, height: 50 }} name='person' onPress={() => navigate('CreateProfile')} />
      <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate.navigate('ProfilesList')} />
      <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate.navigate('ProfilesList')} />
      </View>
    );
  }

}

export default NavBar;
