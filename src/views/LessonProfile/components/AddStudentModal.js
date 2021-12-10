import React, { useState } from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectItem from "components/SelectItem/SelectItem.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomDatePiker from 'components/CustomDatePiker/CustomDatePiker.js';
import PN from "persian-number"
export default function AddStudentModal(prop) {
    const { classes } = prop;
    const [nationalCode, setNationalCode] = useState()

    const submitHandler = () => prop.submit(nationalCode);
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>افزودن فرد</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <CustomInput
                                    labelText="کد ملی فرد"
                                    id='nationCode'
                                    onChange={(e) => setNationalCode(e.target.value)}
                                    value={PN.convertEnToPe( nationalCode)}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                    <CardFooter>
                        <Button color="rose" onClick={submitHandler}>
                            ثبت
                        </Button>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    )
}
