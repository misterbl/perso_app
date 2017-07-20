const INIT = {
  username: "",
  age: null,
  city: "",
  currentUser: {},
  latitude: null,
  longitude: null,
  error: null,
  about:"",
}
export default (state = INIT, { type, username, age, city, currentUser, geoLocation, latitude, longitude, error, about }) => {
  switch (type) {
    case 'SET_PROFILE':
      return {
        ...state,
        username,
        age,
        city,
        about,
      };
      case 'RETRIEVE_PROFILE':
        return {
          ...state,
          currentUser,
      };
      case 'ASSIGN_LOCATION':
        return {
          ...state,
          latitude,
          longitude,
          error,
      };
      default:
      return state;
    }
  };

// import createReducer from '../lib/createReducer';
// import * as types from '../actions/types';
//
// const INIT = {
//   username: "",
//   age: null,
//   city: "",
// };
// export const saveProfile = createReducer({}, {
//
// });
//
// export const setProfile = createReducer({INIT}, {
//   [types.SET_PROFILE](state = INIT, action) {
//     let newState = {}
//     newState[username] = action.username
//   },
//   newState,
// });
