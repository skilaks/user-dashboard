import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
  withoutMargin: {
    margin: "0  !important",
    width: "unset",
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children , withoutMargin ,...rest } = props;

  const styles = classNames({
    [" " + classes.withoutMargin]: withoutMargin ,
  })
  return (
    <Grid container {...rest} className={classes.grid + styles}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
  withoutMargin : PropTypes.bool
};
