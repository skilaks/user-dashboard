import React from 'react'

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { withStyles } from '@material-ui/core/styles';


const ToogleButtonGroupWithStyle = withStyles({
    root: {
        fontFamily: ' "Yekan", "Helvetica", "Arial"," sans-serif"',
        direction: 'ltr !important',

    }
})((props) => <ToggleButtonGroup  {...props} />);


export default function ToogleButton(prop) {

    const { classes, buttons,color } = prop;

    const [alignment, setAlignment] = React.useState('online');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        prop.onChange(newAlignment);
    };

    return (
        <ToogleButtonGroupWithStyle
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
           
        >
            {buttons && buttons.map((button, key) => <ToggleButton value={button.value} key={key}  color={color}  >
                <h6>{button.label}</h6>
            </ToggleButton >)}
        </ToogleButtonGroupWithStyle>
    )
}
