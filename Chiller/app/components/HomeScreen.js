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
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    const { navigate } = _this.props.navigation;
    return (
      <View style={{flexDirection: 'row', height: 40, marginTop: 30, backgroundColor: '#f7f391'}}>
     <Icon style={{ marginLeft: 60, width: 100, height: 50, marginTop: 5}} color='#bd91f7'  name='person' onPress={() => navigate('CreateProfile')} />
     <Icon style={{ width: 100, height: 50, marginTop: 5  }} color='#bd91f7' name='sms' onPress={() => navigate('ProfilesList')} />
     <Icon style={{ width: 100, height: 50, marginTop: 5 }} color='#bd91f7' name='sms' onPress={() => navigate('ProfilesList')} />
     </View>
    );
  }

}
export class HomeScreen extends React.Component {
  static navigationOptions = {
    header:  <Header {...this.props}/>
,
  };
  componentWillMount() {
    _this = this;
  }
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f7f391'}}>
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
