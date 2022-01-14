import React, { useState, useEffect } from 'react'
import DatePicker from "react-multi-date-picker"
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { Switch } from 'antd';
// import {persian} from "react-date-object/calendars/persian"
// import {persian_fa} from "react-date-object/locales/persian_fa"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import PN from 'persian-number'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Logo from "assets/img/logo.png";
import CustomInput from 'components/CustomInput/CustomInput';
import CustomTextField from 'components/CustomInput/CustomTextField';
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import { InputLabel } from '@material-ui/core';
import TeacherCompletionForm from './TeacherCompletionForm';
import StudentCompletionForm from './StudentCompletionForm';



export default function CompletionForm(prop) {
    const { classes, pervStep, registerHandler, completionHandler } = prop;
    //--------------------------
    const [completionData, setConfirmation] = useState({});
    const [alert, setAlert] = useState(false);
    const [typeOfUser, setTypeOfUser] = useState('teacher');//true : student , false : teacher;
    const [messageAlert, setMessageAlert] = useState('');
    const [error, setError] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationalCode, setNationalCode] = useState('');
    const [birthDay, setBirthDay] = useState('')
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState({})
    const [fieldOfStudy, setFieldOfStudy] = useState('')
    const [dergee, setDergee] = useState({});
    const [workExperience, setWorkExperience] = useState({});
    const [flagRules, setFlagRules] = useState(false);
    //-----------------------


    //------------------------------------------
    const submitHandler = (flag) => {
        if (validateHandler()) {
            setTypeOfUser(typeOfUser ? 'student' : 'teacher')
            completionHandler({ firstName, lastName, email, birthDay, typeOfUser, nationalCode, grade, dergee, workExperience, fieldOfStudy })
        }

    }
    //------------------------
    const validateHandler = () => {
        if (!firstName && !lastName && !nationalCode && !email && !flagRules) {
            setError(true);
            showNotification(true);
            setMessageAlert('لطفا فیلد ها را کامل کنید!')
            return false;
        } else {
            setError(false);
            return true;
        }
    }
    //-------------------------
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
    //-------------------------
    useEffect(() => {

    })
    return (
        <>

            <Snackbar
                place="bl"
                color="rose"
                // icon={AddAlert}
                message={PN.convertEnToPe(messageAlert)}
                open={alert}
                closeNotification={() => showNotification(false)}

            />
            <GridContainer withoutMargin >
                <GridItem xs={12} sm={12} md={12} justifyContentCenter >
                    <GridItem xs={12} sm={6} md={3}  >
                        <div className={classes.formSignin}>
                            <img src={Logo} alt='logo' className={classes.imgInherit} />
                            <GridContainer>
                                <GridItem xs={12} sm={6} md={6}>
                                    <CustomInput
                                        labelText="نام"
                                        id='firstName'
                                        name="firsName"
                                        onChange={e => setFirstName(e.target.value)}
                                        value={PN.convertEnToPe(firstName)}
                                        startAdornment={error ? <InputAdornment position="end"><PriorityHighIcon color="error" /></InputAdornment> : ''}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>

                                    <CustomInput
                                        labelText="نام خانوادگی"
                                        id='lastName'
                                        name="lastName"
                                        startAdornment={error ? <InputAdornment position="start"><PriorityHighIcon color="error" /></InputAdornment> : ''}
                                        onChange={e => setLastName(e.target.value)}
                                        value={PN.convertEnToPe(lastName)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>

                                    <CustomInput
                                        labelText="کد ملی"
                                        type="text"
                                        id='nationalCode'
                                        name="nationalCode"
                                        startAdornment={error ? <InputAdornment position="end"><PriorityHighIcon color="error" /></InputAdornment> : ''}
                                        onChange={e => setNationalCode(e.target.value)}
                                        value={PN.convertEnToPe(nationalCode)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} justifyContentSpaceBetween>

                                    <GridItem xs={12} sm={6} md={6}  >
                                        <InputLabel>
                                            <h6>   تاریخ تولد  :  </h6>
                                        </InputLabel>
                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={6} >
                                        <DatePicker
                                            title="تاریخ تولد"
                                            placeholder="تاریخ تولد"
                                            calendar={persian}
                                            locale={persian_fa}
                                            value={birthDay}
                                            onChange={setBirthDay}
                                            calendarPosition="bottom-right"

                                        />
                                    </GridItem>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>

                                    <CustomInput
                                        labelText="ایمیل"
                                        type="email"
                                        id='email'
                                        name="email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        startAdornment={error ? <InputAdornment position="end"><PriorityHighIcon color="error" /></InputAdornment> : ''}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>

                                    <Switch checkedChildren="دانش آموز" unCheckedChildren="استـــــاد" onChange={(e) => setTypeOfUser(e ? 'student' : 'teacher')} />

                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} >
                                    {typeOfUser == 'teacher' && <TeacherCompletionForm FieldOfStudy={{ fieldOfStudy, setFieldOfStudy }} Dergee={{ dergee, setDergee }} WorkExperience={{ workExperience, setWorkExperience }} />}
                                    {typeOfUser == 'student' && <StudentCompletionForm FieldOfStudy={{ fieldOfStudy, setFieldOfStudy }} Grade={{ grade, setGrade }} />}
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12}>

                                    <CustomTextField
                                        label='آدرس کامل'
                                        multiline
                                        rows={4}

                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    // value={}
                                    // onChange={}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                                    {error && <PriorityHighIcon color="error" />}
                                    <FormControlLabel control={<Checkbox color="secondary" checked={flagRules} onChange={e => setFlagRules(e.target.checked)} />} label={<h6>با قوانین سایت کاملا موافقم</h6>} />
                                </GridItem>

                            </GridContainer>


                        </div>
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <Button
                                color="rose"
                                onClick={() => submitHandler('completion')}
                                target="_blank"
                                fullWidth
                            >
                                {PN.convertEnToPe('تکمیل ثبت نام')}
                            </Button>
                        </GridItem>

                    </GridItem>
                </GridItem>
            </GridContainer>
        </>
    )

}
