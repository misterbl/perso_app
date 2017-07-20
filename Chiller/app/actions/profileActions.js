// import Realm from 'realm';
// import * as types from './types';
// import Api from '../lib/api';
//
// export let realm = new Realm({
//   schema: [{ name: 'User', properties: {
//     name: 'string',
//     age: {type: 'int', default: 0},
//     city: 'string',
//   }
// }]
// });
//
//
// //
// // export function retrieveProfile(username) {
// //   return (dispatch, getState) => {
// //     const params = [
// //       `username=${encodeURIComponent(username)}`,
// //       `findProfile=false`,
// //       `limitLicense=false`,
// //       'number=20',
// //       `ranking=1`,
// //     ].join('&');
// //     return Api.get(`/profile/findByUsername?&{params}`).then(resp => {
// //       console.log(resp);
// //     }).catch( (ex) => {
// //       console.log(ex);
// //     })
// // }
// // };
//
// export function setProfile(username, age, city) {
//   try {
//   realm.write(() => {
//    let user = realm.create('User', {name: username, age: age, city: city });
//   let users = realm.objects('User').filtered(`name = "${username}"`);
//   });
// } catch (e) {
//   console.log("Error on creation");
// }
//   return {
//     type: 'SET_PROFILE',
//     username,
//     age,
//     city,
//
//   }
// }
// export function retrieveProfile(username) {
//     let users = realm.objects('User');
//     let current = users.filtered(`name = "${username}"`)[0];
//   return {
//     type: 'RETRIEVE_PROFILE',
//     currentUser: current,
//   }
// }
//
// export function assign(latitude, longitude, error) {
//   console.log("hello");
//   return {
//     type: 'ASSIGN_LOCATION',
//     latitude: latitude,
//     longitude: longitude,
//     error: error,
//   }
// }
