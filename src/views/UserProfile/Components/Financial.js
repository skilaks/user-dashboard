import React from 'react'


import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import PN from "persian-number"
export default function Financial(prop) {

    const {classes,User} = prop;
    return (

        <Card>
            <CardHeader color="rose">
                <h4 className={classes.cardTitleWhite}>مالی</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={2}>

                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )
                            
}
