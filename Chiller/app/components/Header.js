import React, { Component } from 'react';
import { View, AppRegistry, } from 'react-native';
import { Icon } from 'react-native-elements';

export class Header extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'row', marginTop: 40}}>
     <Icon style={{ marginLeft: 60, width: 100, height: 50 }}
            name='person' onPress={() => this.props.navigator.push({name: "Login"})} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.props.navigator.push({name: "Profiles List"})} />
     <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.props.navigator.push({name: "Profiles List"})} />
     </View>
    );
  }

}
