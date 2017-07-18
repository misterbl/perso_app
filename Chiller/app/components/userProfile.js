import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';

class UserProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
    });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Card title={params.user} >
        <View>
          <Image
            resizeMode="cover"
            source={require('../assets/userAvatar.png')}
          />
          <Text>{params.user}</Text>
        </View>
      </Card>
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
