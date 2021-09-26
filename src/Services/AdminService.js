import axios from 'axios';
const API_ADDRESS =  'http://localhost:5000/admin/';

export const AdminService = {
    getUsers : ()=>{
        return axios.get(API_ADDRESS);
    },
    getUserById : (Id)=>{
        return axios.get(API_ADDRESS +Id)
    },
    getUserByFullName : (FullName)=>{
        return axios.get(API_ADDRESS +FullName);
    },
    getSelf : ()=>{
        return axios.get(API_ADDRESS + 'self');
    }
}