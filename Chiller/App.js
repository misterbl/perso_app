import React, { Component } from "react";
import { AppRegistry, Navigator, } from "react-native";
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


const APP_BASE = 'https://chiller-58d16.firebaseio.com'
    const FIREBASE_CONFIG = {
        apiKey: 'AIzaSyCmM5WfOMVWOWuinklCXs81y-eb7TtbT0M',
        authDomain: 'chiller-58d16',
        databaseURL: APP_BASE,
        storageBucket: 'chiller-58d16.appspot.com',
    };

export class App extends Component {
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
      let initialView = "Create Profile"
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
        return (<ProfilesList navigator={navigator} />);
        break;
      case "User Profile":
        return (<UserProfile navigator={navigator} />);
        break;
      case "Header":
        return (<Header navigator={navigator} />);
      case "Chat":
        return (<Chat navigator={navigator} />);
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
    if (this.state.userLoaded) {
      return (
         <Provider store={store}>
          <Navigator
              initialRoute={{name: this.state.initialView}}
              renderScene={App.renderScene}
              configureScene={App.configureScene}
          />
        </Provider>);
    } else {
      return null;
    }
  }
}

AppRegistry.registerComponent('Chiller', () => App);
