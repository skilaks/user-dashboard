import React, { useState, useEffect } from 'react'

import CircularProgress from '@mui/material/CircularProgress';

import InputLabel from "@material-ui/core/InputLabel";

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
import ReactPlayer from 'react-player';
import CustomPlayer from 'components/CustomPlayer/CustomPlayer';

export default function Profile(prop) {
    const { classes, User, Loading } = prop;
    const [editMode, setEditeMode] = useState(true);
    const [loading, setLoading] = useState(Loading)
    const [lastName, setLastName] = useState(User.lastName || 'تعیین نشده');
    const [firstName, setFirstName] = useState(User.firstName || 'تعیین نشده');
    const [nationalCode, setNationalCode] = useState(User.nationalCode || 'تعیین نشده');
    const [maritalStatus, setMaritalStatus] = useState(User.maritalStatus || 'تعیین نشده');
    const [telegramId, setTelegramId] = useState(User.telegramId || 'تعیین نشده');
    const [email, setEmail] = useState(User.email || 'تعیین نشده');
    const [username, setUsername] = useState(User.username || 'تعیین نشده');
    const [age, setAge] = useState(User.age || 'تعیین نشده');
    const [phone, setPhone] = useState(User.phone || 'تعیین نشده');
    const [address, setAddress] = useState(User.address || 'تعیین نشده');
    const [typeofuser, setTypeofuser] = useState(User.typeOfUser || 'تعیین نشده');
    const [grade, setGrade] = useState(User.grade || 'تعیین نشده');


    const editProfileHandler = () => {
        setEditeMode(false);
    };

    return (


        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>پروفایل کاربر</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
                {loading ?


                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <CircularProgress color="primary" />
                        </GridItem>
                    </GridContainer>

                    :
                    <>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="نوع کاربری"
                                    id="typeOfuser"
                                    onChange={(e) => setTypeofuser(e.target.value)}
                                    value={typeofuser}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="نام کاربری"
                                    id="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="کد ملی"
                                    id="nationalCode"
                                    onChange={(e) => setNationalCode(e.target.value)}
                                    value={PN.convertEnToPe(nationalCode)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>


                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="نام"
                                    id="first-name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="نام خانوادگی"
                                    id="last-name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={1}>
                                <CustomInput
                                    labelText="سن"
                                    id="age"
                                    onChange={(e) => setAge(e.target.value)}
                                    value={PN.convertEnToPe(age)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="آدرس ایمیل"
                                    id="email-address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="شماره تماس"
                                    id="phone"
                                    type="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={PN.convertEnToPe(phone)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="وضعیت تاهل"
                                    id="maritalStatus"

                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                    value={maritalStatus}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="مدرک تحصیلی"
                                    id="grade"
                                    onChange={(e) => setGrade(e.target.value)}
                                    value={grade}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={2}>
                                <CustomInput
                                    labelText="آیدی تلگرام"
                                    id="telegramId"
                                    onChange={(e) => setTelegramId(e.target.value)}
                                    endAdornment={<InputAdornment position="end">@</InputAdornment>}

                                    value={telegramId}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>

                                <CustomInput
                                    labelText="آدرس"
                                    id="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={PN.convertEnToPe(address)}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        disabled: editMode,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        
                    </>
                }
            </CardBody>
            <CardFooter>
                <Button className={classes.btn} color="primary">
                    بروز رسانی
                </Button>
                <Button
                    className={classes.btn}
                    color="primary"
                    onClick={editProfileHandler}
                >
                    تغییر مشخصات
                </Button>
            </CardFooter>
        </Card>

    )
}
