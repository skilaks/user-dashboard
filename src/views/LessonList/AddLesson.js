import React, { useState } from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

export default function AddLesson(prop) {
    const {submit}= prop
    const [lessonName, setLessonName] = useState('')
    const [teacherName, setTeacherName] = useState('')
    const [capacity, setCapacity] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const submitHandler = ()=>{
        submit({lessonName,teacherName,capacity,typeOfCourse:type,status});
    }
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
                                    value={capacity}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={9} sm={6} md={3}>
                                <CustomInput
                                    labelText="نوع"
                                    id='type'
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={9} sm={6} md={3}>
                                <CustomInput
                                    labelText="وضعیت"
                                    id='status'
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
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
