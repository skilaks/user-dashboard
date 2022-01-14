import React from 'react'
import classNames from "classnames";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";

const styles = {

    positionFixed:{
        position: 'fixed',
        bottom: '200px',
       
    },

}
const useStyles = makeStyles(styles);
export default function CustomFab(prop) {
    const {size, color, label,positionFixed, children , onClick} = prop;
    const classes = useStyles();
const fabClasses  = classNames({
    [classes.positionFixed]  : positionFixed
})
    return (
        <Fab className={fabClasses}s size={size} color={color} aria-label={label} onClick={onClick}   >
            {children}
        </Fab>
    )
}
