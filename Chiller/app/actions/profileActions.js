import * as types from './types';
import Api from '../lib/api';

export function addRecipe() {
  return {
  type: types.ADD_RECIPE,
}
};

export function retrieveProfile(username) {
  return (dispatch, getState) => {
    const params = [
      `username=${encodeURIComponent(username)}`,
      `findProfile=false`,
      `limitLicense=false`,
      'number=20',
      `ranking=1`,
    ].join('&');
    return Api.get(`/profile/findByUsername?&{params}`).then(resp => {
      console.log(resp);
    }).catch( (ex) => {
      console.log(ex);
    })
}
};

export function setProfile(username, age, city) {
  return {
    type: 'SET_PROFILE',
    username,
    age,
    city,

  }
}
