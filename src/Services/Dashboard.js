import axios from 'axios';
const API_ADDRESS = 'http://localhost:5000/admin/Dashboard/';
import { Data } from '../data/dashboardData'
export const DashboardService = {
    getDetailedInformation: () => {
        //get method 

        return Data.DetailedInformation;
    },
    getChartsInformation: () => {
        //get method 


        return Data.chartsInformation;
    }
}