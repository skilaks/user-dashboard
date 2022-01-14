import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const rtlStyle = {
  successText: {
    color: successColor[0],
  },
  bgLight:{
    backgroundColor: '#f8f9fc !important',
  },
  formSignin :{
    width: '100%',
    maxWidth: '500px',
    padding: '1rem',
    // margin: 'auto',
    marginTop: '8rem'
   
  },
  imgInherit: {
    width: 'inherit'
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  hoverIcon:{
    "& hover":{
      backgroundColor: "red"
    }
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& button" :{
      marginLeft: "10px",
      color: grayColor[0],
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardHeader:{
    display: "flex",
    justifyContent: "Space-between",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    "& a": {
      color: whiteColor,
    },
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    marginLeft:'1rem',
    alignSelf: "center",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Yekan', 'Helvetica', 'Arial', sans-serif",
    textShadow:' 1px 0.5px 0.5px #2f2f2544',
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
   marginLeft:'1rem',

    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Yekan', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  footerBtn:{
    marginLeft:'5px'
  },
  btn: {
    fontFamily: "'Yekan', 'Helvetica', 'Arial', sans-serif",
    fontSize: "medium",
  },
  chipTitlewhite: {

  },
  tableResponsive: {
    marginTop:'1rem',
    width: "100%",
    overflowX: "auto",
  },
  customChips: {
    marginLeft:'10px',
    
  },
  selectionLessonHeighte: {
    height: "25rem"
  }

};

export default rtlStyle;
