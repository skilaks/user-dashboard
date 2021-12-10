
import axios from 'axios';
import { DataSample } from '../data/dataSample'
import { UserFinancially } from '../data/financial'

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
    getUserByNationalCode: (nCode, callback) => {
        //get  user from the Server

        //--------method just for testing purposes--------
        DataSample.filter(user => {
            if (user.nationalCode === nCode)
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
    getAllUserFinancially: (callback) => {
        //get from Server

        //-----sample--------------
        callback(UserFinancially)
    },
    getUserFinanciallyByNcode: (nCode,callback) => {
        UserFinancially.filter(data =>{
            if(data.nationalCode==nCode){
                callback(data)
            }
        })
    }


}