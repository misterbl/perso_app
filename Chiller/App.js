import React from 'react';
import { StackNavigator } from 'react-navigation';
import AppContainer from './app/containers/AppContainer'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'
import { HomeScreen }from './app/components/HomeScreen'
import CreateProfile from './app/components/CreateProfile'
import ProfilesList from './app/components/ProfilesList'
import UserProfile from './app/components/UserProfile'
import { Header } from './app/components/HomeScreen'
import ChatBox from './app/components/ChatBox'


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Header: { screen: Header },
  CreateProfile: { screen: CreateProfile },
  ProfilesList: { screen: ProfilesList },
  UserProfile: { screen: UserProfile },
  ChatBox: { screen: ChatBox },
});

export default App;
