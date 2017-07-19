import React, { Component } from 'react';
import { View, AppRegistry, } from 'react-native';
import { Icon } from 'react-native-elements';

export class Header extends React.Component {
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
     <Icon style={{ marginLeft: 60, width: 100, height: 50 }} name='person' onPress={() => navigate('CreateProfile')} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate('ProfilesList')} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => navigate('ProfilesList')} />
     </View>
    );
  }

}
