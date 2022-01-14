import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PN from "persian-number"

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import AddAlert from "@material-ui/icons/AddAlert";



import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import { addUser } from '../../../Services';
import { UserService } from '../../../Services';


const useStyles = makeStyles(styles);

export default function Profile(prop) {
    //-------------Styles------------------------------
    const classes = useStyles();
    //----------------Redux------------------------------
    const userOfRedux = useSelector(state => state);
    const dispatch = useDispatch();
    //-------------UseState---------------------------
    const [User, setUser] = useState({})
    const [editMode, setEditeMode] = useState(true);
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('')
    //------------Handler---------------------
    const showNotification = (flag) => {
        if (flag) {
            setAlert(true);
            setTimeout(function () {
                setAlert(false);
            }, 5000);
        }
        else if (!flag) {
            setAlert(false);
        }
    }
    const editProfileHandler = () => {
        setEditeMode(false);
    };
    const submitHandler = () => {
        setEditeMode(true);
        showNotification(true)
        UserService.updateProfile(User, ({ message }) => {
            setMessageAlert(message);
        });
    }
    //-----------UseEffact--------------------
    useEffect(() => {

        if (!userOfRedux)
            UserService.getUserData(user => {
                setUser(user)
                dispatch(addUser(user))
                console.log(user)
            })
        else {
            setUser(userOfRedux[0])
        }
    }, [])
    //--------------Render-------------------------
    return (
        <>
            <Card >
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>پروفایل کاربر</h4>
                    {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
                </CardHeader>
                <CardAvatar profile nonebackground >
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={User.imgAdderss} alt="..." />
                    </a>
                </CardAvatar>
                <CardBody profile>
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
                                        value={User.typeOfUser == 'student' ? 'دانش آموز' : 'مدرس'}
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
                                        labelText="کد ملی"
                                        id="nationalCode"
                                        onChange={(e) => setUser({ ...User, nationalCode: e.target.value })}
                                        value={PN.convertEnToPe(User.nationalCode)}
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
                                        value={User.firstName}
                                        onChange={(e) => setUser({ ...User, firstName: e.target.value })}
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
                                        onChange={(e) => setUser({ ...User, lastName: e.target.value })}
                                        value={User.lastName}
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
                                        onChange={(e) => setUser({ ...User, age: e.target.value })}
                                        value={PN.convertEnToPe(User.age)}
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
                                        onChange={(e) => setUser({ ...User, email: e.target.value })}
                                        value={User.email}
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
                                        onChange={(e) => setUser({ ...User, phone: e.target.value })}
                                        value={PN.convertEnToPe(User.phone)}
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

                                        onChange={(e) => setUser({ ...User, maritalStatus: e.target.value })}
                                        value={User.maritalStatus}
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
                                        onChange={(e) => setUser({ ...User, grade: e.target.value })}
                                        value={User.grade}
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
                                        onChange={(e) => setUser({ ...User, telegramId: e.target.value })}
                                        endAdornment={<InputAdornment position="end">@</InputAdornment>}

                                        value={User.telegramId}
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
                                        onChange={(e) => setUser({ ...User, address: e.target.value })}
                                        value={PN.convertEnToPe(User.address)}
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
                    <Button className={classes.btn} color="primary" onClick={submitHandler}>
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
            <Snackbar
                place="br"
                color="primary"
                icon={AddAlert}
                message={messageAlert}
                open={alert}
                closeNotification={() => showNotification(false)}
                close
            />
        </>
    )
}
