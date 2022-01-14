import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withStyles } from '@material-ui/core/styles';


const FormControlWithStyle = withStyles({
    root: {
        "& legend ": {
            fontFamily: ' "Yekan", "Helvetica", "Arial"," sans-serif" !important',
            direction: 'ltr !important',
        },
        "& span": {
            fontFamily: ' "Yekan", "Helvetica", "Arial"," sans-serif" !important',
            direction: 'ltr !important',
        }


    }
})((props) => <FormControl  {...props} />);


export default function ToogleButton(prop) {

    const { Radios,labelText } = prop;



    return (
        <FormControlWithStyle component="fieldset">
            <FormLabel component="legend">{labelText}</FormLabel>
            <RadioGroup

                aria-label={labelText}
                // name="controlled-radio-buttons-group"
                // value={value}
                onChange={prop.onChange}
                row={true}
            >
                {Radios.map((radio,key ) => <FormControlLabel key={key} value={radio.value} control={<Radio />} label={radio.label} />)}

            </RadioGroup>
        </FormControlWithStyle>
    )
}
