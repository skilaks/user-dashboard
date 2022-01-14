import React, { useState, useEffect } from 'react'





import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import UserTable from 'components/Table/UserTable';
import LessonColumn from 'components/Table/Columns/Lessons'





export  default function LessonsList(prop) {
    const { classes, Lessons } = prop;
    //--------------------------------------------
    const [loading, setLoading] = useState(false);
    const [columns, setColumns] = useState(LessonColumn)
    const [lessons, setLessons] = useState(Lessons)
    //-------------------

    useEffect(() => {
        setLessons(Lessons)
    }, [])
    return (

        <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>دروس انتخابی شما</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3} >
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                        <UserTable columns={columns} data={lessons} loading={loading} />
                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )
}
