import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";


import LessonSelection from './components/LessonSelection'
import SearchLesson from './components/SearchLesson';


const useStyles = makeStyles(styles);

export default function Education() {
    const classes = useStyles();

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                <SearchLesson classes={classes} />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <LessonSelection classes={classes}/>
            </GridItem>
        </GridContainer>
    )
}
