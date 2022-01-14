import React from 'react';
import PropTypes from "prop-types";
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';


const ChipWithStyle = withStyles({
  root: {
    fontFamily:' "Yekan", "Helvetica", "Arial"," sans-serif"',
    
  }
})((props) => <Chip  {...props} />);

export default  function  CustomChip(props) {
    const {label,color,avatar,icon , ...rest} = props; 


  

  return (

      <ChipWithStyle variant="outlined" color={color||'primary'} label={label}  avatar={avatar||null} icon={icon||null} {...rest}  />
    
  );
}

CustomChip.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(['primary','danger','info','success']),
    avatar : PropTypes.node,
    icon: PropTypes.node,

  };