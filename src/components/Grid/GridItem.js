import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "0 15px !important",
   
  },
  justifyContentCenter : {
    display: "flex",
    justifyContent : "center",
    
  },
  justifyContentEnd:{
    display: "flex",
    justifyContent : "end",
    marginLeft: "auto !important",
  },
  justifyContentStart:{
    display: "flex",
    justifyContent : "start",
    marginLeft: "auto !important",
  },
  justifyContentSpaceBetween:{
    display: "flex",
    justifyContent : "space-between",
    marginLeft: "auto !important",
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children,justifyContentCenter,justifyContentEnd,justifyContentStart,justifyContentSpaceBetween, ...rest } = props;
  const justifyContent = classNames({
    [" "+ classes.justifyContentCenter]:justifyContentCenter,
    [" "+ classes.justifyContentEnd]:justifyContentEnd,
    [" "+ classes.justifyContentStart]:justifyContentStart,
    [" "+ classes.justifyContentSpaceBetween]:justifyContentSpaceBetween,
  })
  return (

    <Grid item {...rest} className={classes.grid + justifyContent }>

      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
  justifyContentCenter : PropTypes.bool,
  justifyContentSpaceBetween: PropTypes.bool,
  justifyContentStart: PropTypes.bool,
  justifyContentEnd: PropTypes.bool,
};
