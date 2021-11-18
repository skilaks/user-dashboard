import React from 'react'
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import { Calendar, DatePicker } from 'sg-react-datepicker-persian';
import { DatePicker } from "jalali-react-datepicker";
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
const useStyles = makeStyles(styles);

export default function CustomDatePiker(prop) {
    const classes = useStyles();

    const { formControlProps, id, value,error,success,rtlActive, weekend, timePicker, onSubmit, label, labelText, labelProps } = prop;
    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error,
        [" " + classes.labelRTL]: rtlActive,
      });
      const marginTop = classNames({
        [classes.marginTop]: labelText === undefined,
      });
    return (

        <FormControl
            {...formControlProps}
            className={classes.formControl}
            style={{fontSize:'x-large'}}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + " "+ labelClasses + " "+ classes.marginTop }
                    htmlFor={id}
                    // style={{marginTop:'35px'}}
                    {...labelProps}
                    value={value}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <div  style={{marginTop:'16px'}}>
            <DatePicker
            classes={{
                root: marginTop}}
    
                value={value}
                weekend={weekend}
                timePicker={timePicker}
                onClickSubmitButton={onSubmit}
                label={label}
            />
            {/* <DatePicker   onChange={onSubmit} /> */}
            </div>
        </FormControl>
    )
}
