import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomChip from "components/Chip/CustomChip.js"
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import PN from "persian-number"
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import { TableTags } from 'components/Tag/TableTags';
import { Chip, Tooltip } from '@material-ui/core';
import { LessonService } from '../../../Services/LessonService.js'
import { refType } from '@mui/utils';
const useStyles = makeStyles(styles);
const days = ['شنبه', 'یک شنبه', 'دو شنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه']
const tags = ['ریاضی1- 10 صبح', 'tag2', 'tag3', 'tag4']
export default function LessonScheduleTable(prop) {
    const classes = useStyles();
    const { Lessons } = prop;
    const [lessons , setLessons] = useState(Lessons);
    const [schedules, setSchedules] = useState();
    const array = []

    useEffect(() => {

        lessons.forEach((lesson, index, arr) => {
            
            LessonService.getScheduleByLessonCode(lesson.code, (sch) => {
                
               array[index]=(sch)
            return   setSchedules(array)
            })
        }
        )
        


    },[lessons])


    return (

        <GridContainer>
            <div  className={classes.tableResponsive}>
            {days.map((day, key) => {
                return <GridItem xs={12} sm={12} md={12} key={key}  >
                    <GridItem xs={12} sm={12} md={12} justifyContentStart>
                        <h5 className={classes.cardTitle}>{day}</h5>
                        {schedules&& schedules.map((sche, key) => {
                            return sche.schedule.map((sch) => {
                                if (sch.day == day) {
                                    return  <CustomChip className={classes.customChips}  label={PN.convertEnToPe(sche.lesson + " - " + sch.time)}  key={key} color="primary" />

                                   
                                }
                            })
                        })}
                    </GridItem>
                    <hr />
                </GridItem>
            })}
            </div>
        </GridContainer>
    )
}
