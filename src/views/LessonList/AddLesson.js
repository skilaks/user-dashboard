import React, { useState } from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectItem from "components/SelectItem/SelectItem.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomDatePiker from 'components/CustomDatePiker/CustomDatePiker.js';
export default function AddLesson(prop) {
    
    const [lessonName, setLessonName] = useState('')
    const [teacherName, setTeacherName] = useState('')
    const [capacity, setCapacity] = useState('')
    const [courseDuration, setCourseDuration] = useState('')
    const [numberOfSessions, setNumberOfSessions] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [courseStartDate, setCourseStartDate] = useState('')
    const [user, setUser] = useState({})
    const submitHandler = () => {
        
        prop.lesson({ lessonName, teacherName, capacity, courseDuration,numberOfSessions, courseStartDate,typeOfCourse: type, status });
    }
    
    const statusItems = [
        {
            value: 'ارائه شده',
            label: 'ارائه شده',

        },
        {
            value: 'درحال برگذاری',
            label: 'درحال برگذاری',
        },
        {
            value: 'در انتظار تایید',
            label: 'در انتظار تایید'
        }

    ]
    const typeItems = [
        {
            value: 'حضوری',
            label: 'حضوری',

        },
        {
            value: 'آنلاین',
            label: 'آنلاین',
        }

    ]
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4>افزودن درس</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={4}>
                                <CustomInput
                                    labelText="نام کلاس"
                                    id='lessonName'
                                    onChange={(e) => setLessonName(e.target.value)}
                                    value={lessonName}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <CustomInput
                                    labelText="نام استاد"

                                    id='teacherName'
                                    onChange={(e) => setTeacherName(e.target.value)}
                                    value={teacherName}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={3} sm={6} md={2}>
                                <CustomInput
                                    labelText="ظرفیت"
                                    type="number"
                                    id='capacity'
                                    onChange={(e) => setCapacity(e.target.value)}
                                    endAdornment={capacity > 0 ? <InputAdornment position="end">نفر</InputAdornment> : ''}

                                    value={capacity}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={3} sm={6} md={2}>
                                <CustomInput
                                    labelText="مدت دوره"
                                    type="number"
                                    endAdornment={courseDuration > 0 ? <InputAdornment position="end">ماه</InputAdornment> : ''}
                                    id='CourseDuration'
                                    onChange={(e) => setCourseDuration(e.target.value)}
                                    value={courseDuration}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    
                                />
                            </GridItem>
                            <GridItem xs={3} sm={6} md={2}>
                                <CustomInput
                                    labelText="تعداد جلسات"
                                    type="number"
                                    endAdornment={numberOfSessions > 0 ? <InputAdornment position="end">جلسه</InputAdornment> : ''}
                                    id='numberOfSessions'
                                    onChange={(e) => setNumberOfSessions(e.target.value)}
                                    value={numberOfSessions}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    
                                />
                            </GridItem>
                            <GridItem xs={3} sm={6} md={5} justifyContentCenter>
                                
                            <CustomDatePiker labelText='تاریخ شروع دوره' onSubmit={(e)=>setCourseStartDate(e.value._d)} success/>
                            </GridItem>
                            
                            <GridItem xs={9} sm={6} md={2}>
                                
                                 <SelectItem
                                    label='نوع'
                                    id='type'
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                    items={typeItems}
                                // variant = 'outlined'
                                />
                            </GridItem>
                            <GridItem xs={9} sm={6} md={2}>
                               
                                <SelectItem
                                    label='وضعیت'
                                    id='status'
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    items={statusItems}
                                // variant = 'outlined'
                                />

                            </GridItem>
                        </GridContainer>
                    </CardBody>
                    <CardFooter>
                        <Button color="rose" onClick={submitHandler}>
                            ثبت
                        </Button>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    )
}
