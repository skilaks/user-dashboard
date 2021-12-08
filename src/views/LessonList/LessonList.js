import React, { useEffect, useState, memo } from "react";
// @material-ui/core components
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomFab from 'components/Fab/CustomFab.js';
import CustomModal from 'components/Modal/CustomModal.js';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import UserTable from "components/Table/UserTable.js";
import Columns from "components/Table/Columns/Lessons.js"
import Button from "components/CustomButtons/Button.js"
import AddLesson from "./AddLesson.js";
import { lessonsDataSample, lessonsName } from '../../data/lessonDataSample'

const styles = {

  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
      textAlign: "center",
      fontFamily: "Yekan"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};




const useStyles = makeStyles(styles);

export default function LessonList() {
  // useEffect(() => {
  // }, [])
  const classes = useStyles();
  const [columns, setColumns] = useState(Columns(lessonsName));
  const [Data, setData] = useState(lessonsDataSample)
  const [openModal, setOpenModal] = React.useState(false);
  const submitLesson = (lesson) => {
    setData(lesson)
    setOpenModal(false)
  }

  const TableCard = () => {
    return
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}> لیست دروس   </h4>
          </CardHeader>
          <CardBody>
            <UserTable columns={columns} data={lessonsDataSample} />
          </CardBody>
        </Card>
        <CustomFab size="small" color="secondary" label="add" onClick={() => setOpenModal(true)}>
          <AddIcon />
        </CustomFab>

        <CustomModal open={openModal} close={() => setOpenModal(false)}>
          <AddLesson lesson={submitLesson} />
        </CustomModal>
      </GridItem>


    </GridContainer>
  );
}

// export default LessonList;
