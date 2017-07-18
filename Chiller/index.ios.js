import React, { Component, PropTypes } from 'react';
import { AppRegistry } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setProfile } from './app/actions/profileActions.js'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'
import App from './App';


class Chiller extends Component {
  render() {

   return (
     <Provider store={store}>
     <App/>
     </Provider>
   )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setProfile,
};

export default connect(
             mapStateToProps,
             mapDispatchToProps
           )(Chiller);

AppRegistry.registerComponent('Chiller', () => Chiller);
