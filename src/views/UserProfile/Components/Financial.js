import React, { useState, useEffect } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import PN from "persian-number"
import jalaliMoment from 'jalali-moment'
import DateMiladi from 'date-and-time';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import UserTable from "components/Table/UserTable.js"
import Button from "components/CustomButtons/Button.js";
import FinancialUserColumn from "components/Table/Columns/FinancialUserColumn.js"
import { UserService } from "../../../Services/UserService"


export default function Financial(prop) {

    const { classes, User } = prop;
    const [inventory, setInventory] = useState(0);
    const [totalPayments, setTotalPayments] = useState();
    const [data, setData] = useState();
    const [payments, setPayments] = useState();
    const [columns, setColumns] = useState(FinancialUserColumn);
    const now = new Date();
    useEffect(() => {
        UserService.getUserFinanciallyByNcode(User.nationalCode, (data) => {
            setData(data);
            setInventory(data.inventory)
            setTotalPayments(data.totalPayments)
            setPayments(data.payments)
        })
    })
    return (

        <Card>
            <CardHeader color="rose">
                <h4 className={classes.cardTitleWhite}>مالی</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
            <h5 className={classes.cardTitle}>کیف پول</h5>
                <GridContainer>

                    <GridItem xs={12} sm={3} md={2}>
                        <CustomInput
                            labelText="موجودی"
                            id="inventory"
                            onChange={(e) => setInventory(e.target.value)}

                            value={PN.convertEnToPe(PN.sliceNumber(inventory))}
                            endAdornment={inventory&& <InputAdornment position="end">تومان</InputAdornment>}

                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                disabled: true,
                            }}
                        />



                    </GridItem>

                    <GridItem xs={12} sm={3} md={2}>
                        <CustomInput
                            labelText="کل واریزی"
                            id="inventory"
                            onChange={(e) => setTotalPayments(e.target.value)}

                            value={PN.convertEnToPe(PN.sliceNumber( totalPayments))}
                            endAdornment={totalPayments&& <InputAdornment position="end">تومان</InputAdornment>}

                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                disabled: true,
                            }}
                        />



                    </GridItem>
                
                </GridContainer>
                <hr />
                <h5 className={classes.cardTitle}>لیست واریزی ها</h5>
                
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <UserTable data={payments} columns={columns} />
                   
                      


                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )

}
