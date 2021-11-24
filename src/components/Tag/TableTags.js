import React,{ useState,useEffect } from 'react'
import { Tag} from "antd"
import PN from 'persian-number'
import InputLabel from "@material-ui/core/InputLabel";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
const useStyles = makeStyles(styles);

export  function TableTags(prop) {
    const classes = useStyles();

    const {tags,labelText,closable} = prop
    const [Tags,setTags] = useState();
    const colors = ['red',"magenta","yellow","purple"]
    useEffect(() => {
         setTags(tags)
    },[tags]);
   
    const [editeMode,setEditeMode] = useState(editeMode)
    const handelClose = (removedTag)=> {
        const tags = Tags.filter(tag=>tag!==removedTag);
        setTags(tags);
    }
    
    

    return (
     <div>
            
            
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot}
     
        >
         
     {labelText}
          
           </InputLabel>
      ) : null}
      <div className={classes.marginTop}> 
           {Tags?  Tags.map((tag,key)=>{
              return <Tag 
              className={classes.marginTop}
               key={key}
               color={colors[Math.floor(Math.random() * colors.length)]}
               closable = {closable}
               onClose={e=>{
                   e.preventDefault();
                   handelClose(tag)
               }}
              >{PN.convertEnToPe(tag)}</Tag>
          }) : ''} 
      </div>
      
        </div>
    )
}
