import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    form: {
        margin:' 27px 0 0 0',
        
    },
    labelFontFamily : {
      "& label" :  { fontFamily:'"Yekan" !important'},
      " & .MuiInputBase-root  ":
      { fontFamily:'"Yekan" !important'}
    },
    inputFontFamily : {
        fontFamily:'"Yekan" !important'
    }
  }));
export default function SelectItem(Prop) {
    const {items , onChange , id , label ,value ,helperText,selectProps,variant } = Prop;
    const classes = useStyles();
    const [item, setItem] = useState('');
    return (
        <form className={classes.form} noValidate autoComplete="off">
      <div>
        <TextField
        className={classes.labelFontFamily}
          id={id}
          select
          label={label}
          value={value}
          onChange={onChange}
          helperText={helperText}
          SelectProps={selectProps}
          variant={variant}
        >
          {items.map((option) => (
            <MenuItem key={option.value} value={option.value} className={classes.inputFontFamily} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </form>
    )

}


