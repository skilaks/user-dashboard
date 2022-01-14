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
    getLessonByName: (name, callback) => {
        //get the Lesson by name from the Server

        //this method is sample

        lessonsDataSample.filter(lesson => {

            if (lesson.lessonName == name) {
                callback([lesson])
            }
            return false;
        })

    },
    getLessonsAndScheduleByNcode: (ncode, callback) => {
        //get Lessons and schedule of student by nationalCode from server

        //---
        new Promise((resolve, reject) => {
            let lessons = [];
            lessonsDataSample.filter(lesson => {
                lesson.students.filter(std => {
                    if (std.nCode == ncode) {
                        lessons.push(lesson)

                    }

                })
                resolve(lessons);

            })
        }).then((data) => {
            
            callback(data)
        });

    },

    getScheduleByLessonCode: (code, callback) => {
        lessonsDataSample.filter(lesson => {

            if (lesson.code === code) {

                callback({ lesson: lesson.lessonName, schedule: lesson.schedule });
            }
        })
    },
    getSeletedCourses: ({ typeOfCourse, typeOfGrade }, callback) => {
        //------------------------get from server------------------------

        //---------------------------------------------------------------
        callback(lessonsDataSample.filter(lesson => lesson.typeOfCourse == typeOfCourse))

    }
}