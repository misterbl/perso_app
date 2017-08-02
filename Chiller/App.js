import React, { Component } from "react";
import { AppRegistry, Navigator, View, Text } from "react-native";
import * as firebase from "firebase";
import { Provider } from 'react-redux';
import Home from "./includes/views/home";
import Login from "./includes/views/login";
import { Firebase } from "./app/firebase/firebase";
import { store } from './app/store/configureStore'
import CreateProfile from './app/components/CreateProfile'
import ProfilesList from './app/components/ProfilesList'
import UserProfile from './app/components/userProfile'
import {Header} from './app/components/HomeScreen'
import Chat from './app/components/chat'
import StackLayout from './app/layouts/StackLayout'


const APP_BASE = 'https://chiller-58d16.firebaseio.com'
    const FIREBASE_CONFIG = {
        apiKey: 'AIzaSyCmM5WfOMVWOWuinklCXs81y-eb7TtbT0M',
        authDomain: 'chiller-58d16',
        databaseURL: APP_BASE,
        storageBucket: 'chiller-58d16.appspot.com',
    };

class AppContent extends Component {
  constructor(props) {
    super(props);
    //firebase.initializeApp(FIREBASE_CONFIG);
    this.getInitialView();
    this.state = {
      userLoaded: false,
      initialView: null
    };
    this.getInitialView = this.getInitialView.bind(this);

  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {
      // let initialView = user ? "Home" : "Login";
      let initialView = "Profiles List"
      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    });
  }

  static renderScene(route, navigator) {
    switch (route.name) {
      case "Home":
        return (<Home navigator={navigator} />);
        break;
      case "Login":
        return (<Login navigator={navigator} />);
        break;
      case "Create Profile":
        return (<CreateProfile navigator={navigator} />);
        break;
      case "Profiles List":
        return (<ProfilesList navigator={navigator} {...route.passProps} />);
        break;
      case "User Profile":
        return (<UserProfile navigator={navigator} {...route.passProps} />);
        break;
      case "Header":
        return (<Header navigator={navigator} />);
      case "Chat":
        return (<Chat navigator={navigator} {...route.passProps}/>);
        break;
    }
  }

  static configureScene(route) {
    if (route.sceneConfig) {
      return (route.sceneConfig);
    } else {
      return ({
        ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {}
      });
    }
  }

  render() {
    // console.log(this);
    // if (this.state.userLoaded) {
      return (

        <StackLayout/>
          //  <View style={{backgroundColor: '#f7f391'}}>

        //      <View  style={{ marginTop: 40}}>
        //
        //     <Header/>
        //     <Navigator
        //     initialRoute={{name: this.state.initialView}}
        //     renderScene={AppContent.renderScene}
        //     configureScene={AppContent.configureScene}
        // />
        //   </View>
        // {/* <Text>Hi</Text>
        // </View>
        // //
        // // </View> */}
  );
  //   } else {
  //     return null;
  //   }
  // }
}
}

export class App extends Component {
  render() {
    console.log(this);
      return (
         <Provider store={store}>
           <AppContent/>
        </Provider>)
  }
}
AppRegistry.registerComponent('Chiller', () => App);
