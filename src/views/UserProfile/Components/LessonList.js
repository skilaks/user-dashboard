import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PN from "persian-number"
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import UserTable from 'components/Table/UserTable';
import { lessonsDataSample, lessonsName } from '../../../data/lessonDataSample'
import { LessonService } from 'Services/LessonService';
import Columns from "components/Table/Columns/ProfielLessonList"
const useStyles = makeStyles(styles);

export default function LessonList(prop) {
  const { UserLessons,nationalCodeUser } = prop;
  const classes = useStyles();
  const [lessons, setLesson] = useState();
const [columns,setColumns] = useState(Columns(lessonsName,nationalCodeUser));
  const array = [];
  useEffect(() => {
    UserLessons.forEach((lesson, index) => {

      LessonService.getLessonByCode(lesson.code, (les) => {
          array[index] =les 
          return setLesson(array)
      })

    }

    )

  }, [])
  
  return (
    
    <UserTable columns={columns} data={lessons} />
  )
}
