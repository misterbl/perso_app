const INIT = {
  username: "",
  age: null,
  city: "",
}
export default (state = INIT, { type, username, age, city }) => {
  switch (type) {
    case 'SET_PROFILE':
      return {
        ...state,
        username,
        age,
        city,
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
