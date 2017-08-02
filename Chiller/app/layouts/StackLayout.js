import React, { Component } from 'react';
import {StyleSheet, Dimensions, AppRegistry, Navigator, View, Text } from "react-native";
import * as firebase from "firebase";
import { Provider, connect } from 'react-redux';
import Home from "../../includes/views/home";
import Login from "../../includes/views/login";
import { Firebase } from "../firebase/firebase";
import { store } from '../store/configureStore'
import CreateProfile from '../components/CreateProfile'
import ProfilesList from '../components/ProfilesList'
import UserProfile from '../components/userProfile'
import {Header} from '../components/HomeScreen'
import Chat from '../components/chat'


var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    //firebase.initializeApp(FIREBASE_CONFIG);
    this.getInitialView();
    this.state = {
      userLoaded: false,
      initialView: null,
      nav: null
    };
    this.getInitialView = this.getInitialView.bind(this);
    this.renderScene = this.renderScene.bind(this);
    //this.renderScene();

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

   renderScene(route, navigator) {
     this.props.profile.nav = navigator;
      console.log("navigator1", this);
    switch (route.name) {
      case "layout" :
      return (<VerticalStackLayout navigator={navigator}  />)
      break;
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
//
//    <View style={{backgroundColor: '#f7f391'}}>
//
//      <View  style={{ marginTop: 40}}>
//
//     <Header/>
//     <Navigator
//     initialRoute={{name: this.state.initialView}}
//     renderScene={AppContent.renderScene}
//     configureScene={AppContent.configureScene}
// />
//   </View>
//  <Text>Hi</Text>
// </View>
//
// </View>

  render() {
    console.log("navigator", this);
    if (this.state.userLoaded) {
      return (

        <View style={styles.container}>
            <Header style={styles.box1} navigator={this.props.profile.nav}/>
              <Navigator
                initialRoute={{name: this.state.initialView}}
                renderScene={this.renderScene}
                configureScene={this.configureScene}
                style={styles.box2}
            />
            {/* <View style={[styles.box, styles.box3]}></View> */}
        </View>
    );
    } else {
      return null;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f7f391'
  },
  box: {
    height: box_height
  },
  box1: {
    height: box_height,

    backgroundColor: '#f7f391'
  },
  box2: {
    height: box_height * 2,
    backgroundColor: '#f7f391'
  },
  box3: {
    backgroundColor: '#f7f391'
  }
});

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(VerticalStackLayout);
