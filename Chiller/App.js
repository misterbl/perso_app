import React from 'react';
import { StackNavigator } from 'react-navigation';
import AppContainer from './app/containers/AppContainer'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'
import HomeScreen from './app/components/HomeScreen'
import CreateProfile from './app/components/CreateProfile'
import ProfilesList from './app/components/ProfilesList'
import UserProfile from './app/components/userProfile'
import Example from './app/components/Chat'
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmM5WfOMVWOWuinklCXs81y-eb7TtbT0M",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = StackNavigator({
  Home: { screen: HomeScreen },
  CreateProfile: { screen: CreateProfile },
  ProfilesList: { screen: ProfilesList },
  UserProfile: { screen: UserProfile },
  Example: { screen: Example },
});

export default App;
