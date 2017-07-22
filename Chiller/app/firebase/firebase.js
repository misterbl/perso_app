'use-strict';
import * as firebase from "firebase";
const APP_BASE = 'https://chiller-58d16.firebaseio.com'

    const FIREBASE_CONFIG = {
        apiKey: 'AIzaSyCmM5WfOMVWOWuinklCXs81y-eb7TtbT0M',
        authDomain: 'chiller-58d16',
        databaseURL: APP_BASE,
        storageBucket: 'chiller-58d16.appspot.com',
    };

    export const Firebase = firebase.initializeApp(FIREBASE_CONFIG);
