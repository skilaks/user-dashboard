import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Chip from '@material-ui/core/Chip';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SelectGroupBtn from "../../components/SelectGroup/selectGroupBtn";
import UserTable from "components/Table/UserTable.js";
import Columns from 'components/Table/Columns.js'
import { Data } from '../../data/tableData.js'
import { DataSample } from '../../data/dataSample'

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

const radios = [
  {
    value: "all",
    label: "همه",
    disabled: false,
  },
  {
    value: "students-collegian",
    label: "دانشجویان",
    disabled: false,
  },
  {
    value: "teachers",
    label: "اساتید",
    disabled: false,
  },
  {
    value: "students",
    label: "دانش آموزان",
    disabled: false,
  },

]

const StudentCollegian = 'دانشجو', Teacher = 'استاد', Student = 'دانش آموز';

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [typeofTable, setTypeOfTable] = React.useState('all');
  const [columns, setColumns] = useState();

  const [dataCurent, setDataCurent] = React.useState([]);
  const setDataCurentOnTable = (data, typeofTable, callback) => {
    fillterdata(data, typeofTable, callback);

  }
  async function fillterdata(data, type, callback) {
    callback(await data.filter((item) => item.typeOfUser.includes(type)));
  }
  useEffect(() => {
    switch (typeofTable) {
      case 'all': { setColumns(Columns('All')), setDataCurent(DataSample) }; break;
      case 'students-collegian': { setColumns(Columns('Student-collegian')), setDataCurentOnTable(DataSample, StudentCollegian, setDataCurent) }; break;
      case 'students': { setColumns(Columns('Student')), setDataCurentOnTable(DataSample, Student, setDataCurent) }; break;
      case 'teachers': { setColumns(Columns('Teacher')), setDataCurentOnTable(DataSample, Teacher, setDataCurent) }; break;
    }


  }, [typeofTable])
  return (
    <GridContainer>

      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}> لیست کاربران   </h4>

          </CardHeader>
          <CardBody>
            <SelectGroupBtn Radios={radios} Value={setTypeOfTable} />
            {console.log(dataCurent)}
            <UserTable columns={columns} data={dataCurent} />
          </CardBody>
        </Card>
      </GridItem>


    </GridContainer>
  );
}
