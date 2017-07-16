import { combineReducers } from 'redux';
import * as profileReducers from './profileReducers';

export default combineReducers({
  profile: profileReducers,
});
