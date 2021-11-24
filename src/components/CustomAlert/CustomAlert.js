import React, { useState, useEffect } from 'react'
import CloseIcon from "@mui/icons-material/Close"

import Alert from "@mui/material/Alert"
import IconButton  from "@mui/material/IconButton"

export default function CustomAlert(prop) {
  
    const { message, variant, severity, color, icon,show } = prop;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        console.log(show)

        },[show])
    return (
        <div>
          { show&& <Alert variant={variant} severity={severity}  icon={icon} color={color} 
            
            action = { 
                    <IconButton 
                    aria-label="بستن"
                    color="inherit"
                    size="small"
                    onClick={()=>setOpen(false)}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                  
            }
            sx={{mb:2}}
            >

            <h5>{message}</h5>
            </Alert>
            
            }
        </div>
    )
}
