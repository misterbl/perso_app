import React, { Component } from 'react';
import ReactNative from 'react-native';
import Realm from 'realm';
import { connect } from 'react-redux';
const {
  ScrollView,
  FlatList,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;
import { setProfile, realm, assign } from '../actions/profileActions.js'

class ProfilesList extends Component {
  static navigationOptions = {
    title: 'List of profiles',
  };

  render() {
    return (
      <View style={styles.container}>
       <FlatList
        data={realm.objects('User')}
        renderItem={({item}) =>
        <View>
        <ImageBackground
          style={styles.image}
          source={require('../assets/avataruser.png')} >
        <Text> Username: {item.name} </Text>
        <Text> Age: {item.age} </Text>
        <Text> City: {item.city} </Text>
        <Text>{'\n'}</Text>
      </ImageBackground>
    </View>}
    />
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    height: 80,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  }
})

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setProfile,
  assign,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(ProfilesList);
