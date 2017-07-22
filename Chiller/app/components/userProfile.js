import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {
    return (
      <Card title="User" >
        <View>
          <Image
            resizeMode="cover"
            source={require('../assets/userAvatar.png')}
          />
          <Text>User</Text>
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
