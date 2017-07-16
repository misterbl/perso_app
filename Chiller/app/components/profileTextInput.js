// import React from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
// import { bindActionCreators } from 'redux';
// import { saveProfile } from '../actions/profileActions';
// import { connect } from 'react-redux';
//
//
// class ProfileTextInput extends React.Component {
//
//   render() {
//     console.log(this);
//     return (
//       <View>
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(username) => this.props.profileReducers.username}
//         value={this.props.profileReducers.username}
//       />
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(age) => this.props.profileReducers.age}
//         value={this.props.profileReducers.age}
//       />
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(city) => this.props.profileReducers.city}
//         value={this.props.profileReducers.city}
//       />
//       <TouchableHighlight onPress={this.props.saveProfile()}>
//         <Text> Save Profile </Text>
//       </TouchableHighlight>
//     </View>
//     );
//   };
// };
// const mapStateToProps = state => ({
//               profile: state.profileReducers,
//             });
// const mapDispatchToProps = {
//   saveProfile,
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ProfileTextInput);
