import React from 'react'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
const styles = {

    positionFixed:{
        position: 'fixed',
        bottom: '50px',
       
    }
}
const useStyles = makeStyles(styles);
export default function CustomFab(prop) {
    const {size, color, label, children , onClick} = prop;
    const classes = useStyles();

    return (
        <Fab className={classes.positionFixed}s size={size} color={color} aria-label={label} onClick={onClick}   >
            {children}
        </Fab>
    )
}
