
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GiftedMessenger from 'react-native-gifted-messenger';
import DismissKeyboard from "dismissKeyboard";
import Database from "../firebase/database";
import {Dimensions} from 'react';
import firebase from '../firebase/firebase'
import { connect } from 'react-redux';
import { Header } from './HomeScreen';

// //import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
// import CustomActions from './CustomActions';
// import CustomView from './CustomView';

class Chat extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
    key: 1}
}
componentDidMount() {
  const user = this.props.profile.currentUser;
  // Database.getMessages(user)
  // let messagesRef = firebase.database().ref("/user/" + user.uid + "/messages");
  // this.listenForMessages(messagesRef);
}
  // componentWillMount() {
  //   let _this = this;
  // }

  // listenForMessages(messagesRef) {
  //   messagesRef.on('value', (dataSnapshot) => {
  //     dataSnapshot.forEach((child) => {
  //       this.props.profile.messages.push({
  //         from: child.val().from,
  //         image: child.val().image,
  //         name: child.val().name,
  //         position: child.val().position,
  //         text: child.val().text,
  //         uniqueId  : child.val().key
  //       });
  //     });
  //     });
  // }

  // handleSend(message = {}, rowID = null) {
  //   console.log("this", this);
  //   Database.setMessages(message, user)
  // };

  handleReceive(message = {}) {
      this._GiftedMessenger.appendMessage(message);
    };

getMessages() {
  return this.props.profile.messages
}

handleSend(message = {}, rowID = null) {
  console.log(this);
  Database.setMessages(message, user)
  this.setState({ key: this.state + 1 });
};

  render() {
    const messages = this.props.profile.messages;
    console.log("render", this);
    return (
      <View key={this.state.key}>
      <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}
        messages={messages}
        handleSend={this.handleSend.bind(this)}
        // onChangeText={this.forceUpdate()}
        //maxHeight={Dimensions.get('window').height - 64} // 64 for the navBar
        senderName={this.props.profile.currentUser.uid}
        displayNames={true}
        keyboardDismissMode="on-drag"
        styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
      />
       </View>
    );
  };
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(Chat);
