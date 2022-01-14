import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import LessonsList from './companents/LessonsList'
import Schedule from "./companents/Schedule"

import { UserService, StorageService, addUser, addLessons } from '../../../Services'
import { LessonService } from '../../../Services/LessonService'


const useStyles = makeStyles(styles);

export default function Lessons() {
    //------------------------------------
    const classes = useStyles();
    //-------------------------------
    const dataOfRedux = useSelector(state => state);
    const dispatch = useDispatch();
    //-----------------------------------------

    const [user, setUser] = useState()
    const [lessons, setLessons] = useState()
    //----------------


    //-----------------------

    useEffect(() => {
        if (!dataOfRedux) {
            if (!StorageService.getDataFromLocalStorage('userData', user => user)) {
                UserService.getUserData(user => {
                    setUser(user)
                    dispatch(addUser(user))


                    LessonService.getLessonsAndScheduleByNcode(user.nationalCode, lessons => {
                        setLessons(lessons)
                        dispatch(addLessons(lessons))
                    })
                    StorageService.setDataToLocalStorage('userData', { fristName: user.firstName, lastName: user.lastName, nCode: user.nationalCode })

                })
            } else {
                StorageService.getDataFromLocalStorage('userData', (user) => {
                    setUser(user)
                    dispatch(addUser(user))
                    LessonService.getLessonsAndScheduleByNcode(user.nCode, (lessons) => lessons => {
                        setLessons(lessons)
                        dispatch(addLessons(lessons))
                    })

                })
            }
        } else {
            setUser(dataOfRedux[0]);
            setLessons(dataOfRedux[1]);
        }







    }, [])

    return (
        <GridContainer>

            <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                {lessons && <LessonsList classes={classes} Lessons={lessons} />}
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                {lessons && <Schedule classes={classes} Schedule={lessons} />}

            </GridItem>
        </GridContainer>
    )
}
