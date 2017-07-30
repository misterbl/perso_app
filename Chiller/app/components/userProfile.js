import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { Header } from './HomeScreen';

class UserProfile extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f7f391'}}>
      <Header/>
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../assets/userAvatar.png')}
      >
        <ScrollView style={{ backgroundColor: "transparent"}}>
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
    marginTop: -500,
    flex: 1,
    alignSelf: 'stretch',
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
