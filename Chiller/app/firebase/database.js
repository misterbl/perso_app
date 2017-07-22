/**
 * @class Database
 */

import * as firebase from "firebase";

class Database {

    /**
     * Sets a users mobile number
     * @param userId
     * @param mobile
     * @param images
     * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
     */
    static setUserMobile(userId, mobile) {

        let userMobilePath = "/user/" + userId + "/details";

        return firebase.database().ref(userMobilePath).set({
            mobile: mobile
        })

    }
    static setUsername(userId, username, city, age,) {

        let userUsernamePath = "/user/" + userId + "/details";

        return firebase.database().ref(userUsernamePath).set({
            city: city,
            username: username,
            age:age
        })

    }

    /**
     * Listen for changes to a users mobile number
     * @param userId
     * @param callback Users mobile number
     */
    static listenUserMobile(userId, callback) {

        let userMobilePath = "/user/" + userId + "/details";

        firebase.database().ref(userMobilePath).on('value', (snapshot) => {

            var mobile = "";

            if (snapshot.val()) {
                mobile = snapshot.val().mobile
            }

            callback(mobile)
        });
    }

}

module.exports = Database;
