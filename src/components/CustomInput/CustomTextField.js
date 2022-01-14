import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
import TextField from '@mui/material/TextField';

const useStyles = makeStyles(styles);


export default function CustomTextField(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    label,
    endAdornment,
    id,
    value,
    labelProps,
    inputProps,
    error,
    success,
    onChange,
    fullWidth,
    rows,
    maxRows,
    multiline,
    type,
    rtlActive,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
    [" " + classes.labelRTL]: rtlActive,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });
  // let newInputProps = {
  //   maxLength:
  //     inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
  //   minLength:
  //     inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  //   step: inputProps && inputProps.step ? inputProps.step : undefined,
  // };
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
     
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
          value={value}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <TextField
        
        className={classes.labelTextFiedl + " " + classes.textField}
        label = {label}
        endAdornment={endAdornment}
        rows={rows}
        maxRows={maxRows}
        type={type}
        onChange={onChange}
        fullWidth = {fullWidth}
        multiline= {multiline}
        id={id}
        value={value}
        {...inputProps}
        // inputProps={newInputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomTextField.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  label : PropTypes.string,
  rows: PropTypes.object,
  maxRows: PropTypes.object,
  fullWidth:PropTypes.bool,
  multiline: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  value: PropTypes.string,
  formControlProps: PropTypes.object,
  endAdornment : PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  rtlActive: PropTypes.bool,
};
