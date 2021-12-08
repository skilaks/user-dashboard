import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Services 
import { UserService } from '../../Services/UserService'
// import avatar from "assets/img/faces/marc.jpg";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
//Import self components
import Profile from "./Components/Profile.js"
import Header from "./Components/Header.js"
import Financial from "./Components/Financial";
import Education from "./Components/Education";
import Scors from './Components/Scors'
const useStyles = makeStyles(styles);
export default function UserProfile(prop) {
  const [userId, setUserId] = useState(prop.match.params.id)
  const [USER, setUSER] = useState()
  useEffect(() => {
    UserService.getUserById(userId, (user) => setUSER(user))
  }, [userId]);
  const classes = useStyles();
  const [editMode, setEditeMode] = useState(true);
  const editModeHandler = () => {
    setEditeMode(false);
    console.log("edit mode")
  };
  return (
    (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {USER && <Header classes={classes} User={USER} EditMode={editMode} />}
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            {USER && <Profile classes={classes} User={USER} />}
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            {USER && <Education classes={classes} User={USER} />}
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            {USER && <Scors classes={classes} User={USER} />}
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            {USER && <Financial classes={classes} User={USER} />}
          </GridItem>
        </GridContainer>
      </div>)
  );
}
