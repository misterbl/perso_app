import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import firebase from '../firebase/firebase'
import { Icon } from 'react-native-elements';
import { Header } from './HomeScreen';

class UserProfile extends Component {
  async componentDidMount() {
    const user = await this.props.profile.currentUser;
  }

  componentDidMount() {
    const userChatting = this.props.userChatting;

   let messagesUserPath = firebase.database().ref("/messages/" + user.uid + userChatting.key);
   this.listenForMessages(messagesUserPath);
 }

 listenForMessages(messagesRef) {
   messagesRef.once('value', (dataSnapshot) => {
     dataSnapshot.forEach((child) => {
       let pos = "";
       child.val().from = user.uid ? pos = "right" : pos = "left"
       this.props.profile.messages.push({
         from: child.val().from,
         image: child.val().image,
         name: child.val().name,
         position: pos,
         text: child.val().text,
         uniqueId: Math.random()
       });
     });
     });
   }

  validate() {

this.props.navigator.push({name: "Chat", passProps: { userChatting: this.props.userChatting}});
console.log("userProfile")
  }
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
          <Icon style={{ width: 100, height: 50 }} name='sms' onPress={() => this.validate()} />
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
