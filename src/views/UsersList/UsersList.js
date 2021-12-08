import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Chip from '@material-ui/core/Chip';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import UserTable from "components/Table/UserTable.js";
import Columns from 'components/Table/Columns.js'
import { UserService } from "../../Services/UserService"
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

export default function TableList() {
  const classes = useStyles();
  const [columns, setColumns] = useState(Columns('All'));
  const [dataCurent, setDataCurent] = useState([]);
  useEffect(() => {
    UserService.getAllUsers(users => setDataCurent(users))
  }, [])
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}> لیست کاربران   </h4>
          </CardHeader>
          <CardBody>
            <UserTable columns={columns} data={dataCurent} />
          </CardBody>
        </Card>
      </GridItem>


    </GridContainer>
  );
}
