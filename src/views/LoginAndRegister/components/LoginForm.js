import React, { useState, useEffect } from 'react'

import AddAlert from "@material-ui/icons/AddAlert";

import PN from 'persian-number'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Logo from "assets/img/logo.png";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from "components/CustomButtons/Button.js";

export default function LoginForm(prop) {
    const { classes, nextStep, loginHandler, } = prop;
    //--------------------------
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    //------------------------------------------
    const submitHandler = (flag) => {

        if (flag == 'register') {

            nextStep();

        }
        else if (phone !== '' && password !== '' && flag == 'login') {


            loginHandler({ phone, password });
            setPhone('');
            setPassword('');

        } else if (flag == 'login') {

            setMessageAlert('لطفا شماره تلفن و رمز عبور خود را وارد نمایید')
            showNotification(true)
            setPhone('');
            setPassword('');
        }
    }
    //------------------------
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
    return (
        <>
            <Snackbar
                place="bl"
                color="rose"
                // icon={AddAlert}
                message={PN.convertEnToPe(messageAlert)}
                open={alert}
                closeNotification={() => showNotification(false)}
                close
            />
            <GridContainer withoutMargin >
                <GridItem xs={12} sm={12} md={12} justifyContentCenter >
                    <GridItem xs={12} sm={6} md={3}  >
                        <div className={classes.formSignin}>
                            <img src={Logo} alt='logo' className={classes.imgInherit} />
                            <CustomInput
                                labelText="شماره تلفن"
                                id='phone'
                                name="phone"
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    disabled: false,
                                }}
                            />
                            <CustomInput
                                labelText="رمز عبور"
                                id='password'
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    disabled: false,
                                }}
                            />
                        </div>
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <Button
                                color="rose"
                                onClick={() => submitHandler('login')}
                                target="_blank"
                                fullWidth
                            >
                                ورود
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <Button
                                color=" "
                                onClick={() => submitHandler('register')}
                                target="_blank"
                                fullWidth
                            >
                                می خوام ثبت نام کنم  !
                            </Button>
                        </GridItem>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </>
    )

}
