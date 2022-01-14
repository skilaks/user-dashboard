import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomFab from 'components/Fab/CustomFab.js';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import ToggleButton from 'components/ToggleButton/ToogleButton.js'
import LessonColumn from 'components/Table/Columns/Lessons'

import { LessonService } from '../../../../Services';
import UserTable from 'components/Table/UserTable';

export default function LessonSelection(prop) {

    const { classes } = prop;
    const arr = [];
    const typeCourseBtns = [
        { label: 'آنلاین', value: 'آنلاین' },
        { label: 'حضوری', value: 'حضوری' },
        { label: 'حضوری-آنلاین', value: 'حضوری-آنلاین' },
    ]
    const typeGradeBtns = [
        { label: 'مدرسه', value: 'school' },
        { label: 'دانشگاه', value: 'university' },
        { label: 'عملی', value: 'practical' }
    ]

    const dispatch = useDispatch();

    const [typeOfCourse, setTypeOfCourse] = useState()
    const [typeOfGrade, setTypeOfGrade] = useState()
    const [columns, setColumns] = useState(LessonColumn)
    const [courses, setCourses] = useState({})
    const [step, setStep] = useState(1);
    const [dataOfRedux, setDataOfRedux] = useState(useSelector(state => state));

    const changeTypeOfCourseHandler = (typeOfCourse) => {
        setTypeOfCourse(typeOfCourse)
        if (step < 3)
            setStep((prev) => prev + 1)

    }
    const changeTypeOfGradeHandler = (typeOfGrade) => {
        setTypeOfGrade(typeOfGrade);
        getCourseHandler();


    }
    const getCourseHandler = async () => {
        await LessonService.getSeletedCourses({ typeOfCourse, typeOfGrade }, (data) => { setCourses(data);step < 3? setStep((prev) => prev + 1):null })

    }




    return (
        <Card >


            <CardHeader color="rose">
                <h4 className={classes.cardTitleWhite}>انتخاب درس</h4>
            </CardHeader>
            <CardBody className={classes.selectionLessonHeighte} >
                <GridContainer>
                    {step == 1 &&
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                                    <h5 className={classes.cardTile}>لطفا نوع کلاس خود را انتخاب کنید!</h5>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                                    <ToggleButton onChange={changeTypeOfCourseHandler} buttons={typeCourseBtns} color='info' />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    }
                    {step == 2 &&
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>

                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                                    <h5 className={classes.cardTile}>سطح درسی را انتخاب نمایید!</h5>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                                    <ToggleButton onChange={changeTypeOfGradeHandler} buttons={typeGradeBtns} color="info" />

                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    }
                    {step == 3 &&
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <UserTable columns={columns} data={courses} />
                            {console.log(courses)}
                        </GridItem>
                    }
                </GridContainer>
                {step > 1 &&
                    <CustomFab size="small" color="secondary" label="back"  onClick={() => setStep((prev) => prev - 1)}>
                        <NavigateNextIcon />
                    </CustomFab>
                }
            </CardBody>


        </Card>

    )
}
