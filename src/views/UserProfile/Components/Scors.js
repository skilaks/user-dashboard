import React, { useState, useEffect } from 'react'

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import PN from "persian-number"
import { Grid } from 'antd';
export default function Scors(prop) {
    const { User, classes } = prop;
    const [scores, setScores] = useState(User.scores)
    const [total, setTotal] = useState(0)
    const [editeMode, setEditeMode] = useState(false);
    useEffect(() => {
        let sum = 0
        const values = Object.values(scores)
        values.forEach(value => sum += value)
        setTotal(sum);


    }, [scores])
    const submitScoreHandler = () => {
        //send to service
        setEditeMode(false);
        console.log(scores);
    }
    return (
        <Card>
            <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>امتیازات</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <h5 className={classes.cardTitle}>امتیازات کسب شده</h5>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText=" فالو کردن"
                                    id="typeOfuser"
                                    onChange={(e) => setScores({ ...scores, follow: e.target.value })}
                                    value={PN.convertEnToPe(scores.follow)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: !editeMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText=" دوره های آموزشی"
                                    id="typeOfuser"
                                    onChange={(e) => setScores({ ...scores, educational: e.target.value })}
                                    value={PN.convertEnToPe(scores.educational)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: !editeMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText=" استعداد یابی"
                                    id="typeOfuser"
                                    onChange={(e) => setScores({ ...scores, talent: e.target.value })}
                                    value={PN.convertEnToPe(scores.talent)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: !editeMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="معرفی اعضاء"
                                    id="typeOfuser"
                                    onChange={(e) => setScores({ ...scores, members: e.target.value })}
                                    value={PN.convertEnToPe(scores.members)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: !editeMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="خرید محصولات"
                                    id="typeOfuser"
                                    onChange={(e) => setScores({ ...scores, buyProducts: e.target.value })}
                                    value={PN.convertEnToPe(scores.buyProducts)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: !editeMode,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={2}>
                        <CustomInput
                            labelText="کل امتیازات کسب شده "
                            id="typeOfuser"
                            value={PN.convertEnToPe(total)}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                disabled: !editeMode,
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={2}>
                        <CustomInput
                            labelText="امتیازات استفاده شده"
                            id="typeOfuser"
                            value={PN.convertEnToPe(scores.used)}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                disabled: !editeMode,
                            }}
                        />
                    </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter>
                <Button className={classes.btn} color="warning" onClick={() => submitScoreHandler()}>
                    بروز رسانی
                </Button>
                <Button
                    className={classes.btn}
                    color="warning"
                    onClick={() => setEditeMode(!editeMode)}
                >
                    تغییر مشخصات
                </Button>
            </CardFooter>
        </Card>
    )
}
