import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { Header } from './HomeScreen';
import ChatBox from './ChatBox';

class UserProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    });
  render() {
    console.log(this);
    const { navigate } = this.props.navigation;
    //const { params } = this.props.navigation.state;
    return (
          <Image
            resizeMode="cover"
            style={{position: "relative", height: "100%", width: "auto", flex: 1 }}
            source={require('../assets/userAvatar.png')}
          >
          <ScrollView showsVerticalScrollIndicator={false} style={{position: "relative", height: "100%" }}>
          <Text style={{backgroundColor: 'transparent'}}>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</Text>
          <View style={{ backgroundColor: "white", opacity:0.5}}>
          <Text style={{backgroundColor: 'transparent'}}>Name</Text>
          <Icon style={{ width: 200, height: 200, marginTop: 5, left: 250 }} color='#bd91f7' name='sms' onPress={() => navigate('ChatBox')} />
          <Text style={{backgroundColor: 'transparent'}}>City</Text>
          <Text style={{backgroundColor: 'transparent'}}>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</Text>
          </View>
        </ScrollView>
        </Image>
    );
  }

}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(UserProfile);
