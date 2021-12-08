
import axios from 'axios';
import { DataSample } from '../data/dataSample'

export const UserService = {
    getAllUsers: (callback) => {
        //get all users from the Server

        //--------method just for testing purposes--------
        callback(DataSample)
        //-----------------------------
    },
    getUserById: (id, callback) => {
        //get  user from the Server

        //--------method just for testing purposes--------
        DataSample.filter(user => {
            if (user.id === id)
                callback(user)
        })
    },
    submitUser: (user, callback) => {
        //send  user to the Server

        //--------method just for testing purposes--------

        callback({ message: `submited \n ${user} \n to server` })
    },
    addUser: (user) => {
        //send  user to the Server

        //--------method just for testing purposes--------

        callback({ message: `added \n ${user} \n to server` })
    },
    deleteUser: (user) => { 
              //deleted  user feom the Server

        //--------method just for testing purposes--------

        callback({ message: `deleted \n ${user} \n from server` })
    },


}