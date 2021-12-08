import axios from 'axios';
import { lessonsDataSample } from '../data/lessonDataSample.js'
const API_ADDRESS = 'http://localhost:5000/admin/';


export const LessonService = {
    getLessonByCode: (code, callback) => {
        //get the lesson from the server


        //this method just for test
        lessonsDataSample.filter(lesson => {
            if (lesson.code == code) {
                callback(lesson)
               
            }

            return true;
        })
        //--------------------
    },
    getLessonByName: (name) => {

    },
    getScheduleByLessonCode: (code, callback) => {
        lessonsDataSample.filter(lesson => {

            if (lesson.code === code) {
                
                callback({lesson: lesson.lessonName, schedule: lesson.schedule});
            }
        })
    }
}