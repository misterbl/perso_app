import React from 'react';
import { StackNavigator } from 'react-navigation';
import AppContainer from './app/containers/AppContainer'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'
import { HomeScreen }from './app/components/HomeScreen'
import CreateProfile from './app/components/CreateProfile'
import ProfilesList from './app/components/ProfilesList'
import UserProfile from './app/components/userProfile'
import { Header } from './app/components/HomeScreen'


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Header: { screen: Header },
  CreateProfile: { screen: CreateProfile },
  ProfilesList: { screen: ProfilesList },
  UserProfile: { screen: UserProfile },
});

export default App;
