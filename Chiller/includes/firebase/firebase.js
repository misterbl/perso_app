
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
          apiKey: "AIzaSyCmM5WfOMVWOWuinklCXs81y-eb7TtbT0M",
          authDomain: "chiller-58d16",
          databaseURL: "https://chiller-58d16.firebaseio.com",
          storageBucket: "chiller-58d16.appspot.com",
        });
    }

}

module.exports = Firebase;
