
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GiftedMessenger from 'react-native-gifted-messenger';
//import { GiftedChat } from 'react-native-gifted-chat';
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
async componentDidMount() {
  const user = await this.props.profile.currentUser;
}


handleReceive(message = {}) {
    let postData = {
      text: message.text,
      position: "right",
      uniqueId: Math.random()
    }
      this.props.profile.messages.push(postData)
    };

getMessages() {
  return this.props.profile.messages
}

handleSend(message = {}, rowID = null) {
  Database.setMessages(message, user, this.props.userChatting)
  this.setState({ key: this.state.key + 1 });
  this.handleReceive(message)
};

  render() {
     console.log("messages", this.props.profile.messages);
    const messages = this.props.profile.messages;
    return (
      <View key={this.state.key}>
        { messages &&
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
      />}
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
