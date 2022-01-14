import React, { useState, useEffect } from 'react'
import PN from 'persian-number'

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomChip from "components/Chip/CustomChip.js"
import CustomInput from "components/CustomInput/CustomInput.js";
import UserTable from 'components/Table/UserTable';
import LessonColumn from 'components/Table/Columns/Lessons'
import Button from 'components/CustomButtons/Button.js'
// import { LessonService } from '../../../../Services/LessonService'



export default function Schedule(prop) {
    const { classes,Schedule } = prop;
    //------------
    const daysOfWeek = ['شنبه', 'یک شنبه', 'دو شنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه']
    //---------------------------
    const [schedules, setSchedules] = useState();

    //-------------------

    useEffect(() => {

        if(Schedule){
            setSchedules(Schedule);
           
        }
        
    }, [schedules])
    return (

        <Card>
        
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>برنامه کلاسی</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <div className={classes.tableResponsive}>
                            {daysOfWeek.map((day, key) => {
                                return <GridItem xs={12} sm={12} md={12} key={key}  >
                                    <GridItem xs={12} sm={12} md={12} justifyContentStart>
                                        <h5 className={classes.cardTitle}>{day}</h5>
                                        {schedules && schedules.map((sche, key) => {
                                            return sche.schedule.map((sch) => {
                                                if (sch.day == day) {
                                                    return <CustomChip className={classes.customChips} label={PN.convertEnToPe(sche.lessonName + " - " + sch.time)} key={key} color="primary" />
                                                }
                                            })
                                        })}
                                    </GridItem>
                                    <hr />
                                </GridItem>
                            })}
                        </div>

                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )
}
