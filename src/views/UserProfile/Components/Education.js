import React from 'react'

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import PN from "persian-number"
import LessonScheduleTable from './LessonScheduleTable';
import LessonList from './LessonList';
export default function Education(prop) {
    const { classes, User } = prop;
    console.log(User.lessons);
    const getSchedule = () => {
        // connect to service and get schedule

    }
    return (
        <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>آموزش</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
                <GridContainer >
                    <GridItem xs={12} sm={12} md={12}>
                    <h5 className={classes.cardTitle}>لیست دروس</h5>
                        <LessonList UserLessons={User.lessons} nationalCodeUser={User.nationalCode}/>
                    <hr/>
                    </GridItem>
                    {User && <GridItem xs={12} sm={6} md={12} >
                        <h5 className={classes.cardTitle}>برنامه کلاسی</h5>
                        <LessonScheduleTable Lessons={User.lessons} className={classes.tableResponsive} />
                    </GridItem>}

                </GridContainer>
            </CardBody>
        </Card>
    )
}
