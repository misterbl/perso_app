import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Header } from './HomeScreen';

class UserProfile extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#f7f391'}}>
        <View  style={{ marginTop: 40}}>
          <Header {...this.props}/>
          </View>
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../assets/userAvatar.png')}
      >
        <ScrollView style={{ backgroundColor: "transparent"}}>
          <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.props.navigator.push({name: "Chat"})} />
        <Text>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        <Text>Helloooooo</Text>
        </ScrollView>
    </Image>
  </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundImage: {

    flex: 1,
    alignSelf: 'center',
    width: null,
  }
})

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(UserProfile);
