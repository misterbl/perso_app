import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';
// import { Header } from './Header'

export class Header extends React.Component {
  static navigationOptions = {
    title: 'Chiller',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flexDirection: 'row'}}>
     <Icon style={{ marginLeft: 60, width: 100, height: 50 }} name='person' onPress={() => navigate('CreateProfile')} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate('ProfilesList')} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate('ProfilesList')} />
     </View>
    );
  }

}
export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Chiller',
  };
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
      <Button
        onPress={() => navigate('CreateProfile')}
        title="Create a profile"
      />
      <Button
        onPress={() => navigate('ProfilesList')}
        title="List of profiles"
      />
    </View>
    )
  }
}
