import React, { useState, useEffect } from 'react'

import AddAlert from "@material-ui/icons/AddAlert";

import PN from 'persian-number'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Logo from "assets/img/logo.png";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from "components/CustomButtons/Button.js";

export default function RegisterForm(prop) {
    const { classes, pervStep, registerHandler, } = prop;
    //--------------------------
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repassword,setRepassword] = useState('')
    const [alert, setAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    //------------------------------------------
    const submitHandler = (flag) => {

        if (flag == 'login') {

            pervStep();

        }
        else if (phone !== '' && password !== '' &&repassword!=='' && password==repassword && flag == 'register') {


            registerHandler({ phone:PN.convertPeToEn( phone), password:PN.convertPeToEn( password) });
            setPhone('');
            setPassword('');

        } else if (flag == 'register' && password!==repassword ) {

            setMessageAlert('لطفا زمر عبور خود را دوباره وارد نمایید !')
            showNotification(true)
            
            setPassword('');
            setRepassword('');
        }else {
            setMessageAlert('لطفا اطلاعات را کامل وارد نمایید !')
            showNotification(true)
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
                                value={PN.convertEnToPe(phone)}
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
                                type='password'
                                onChange={e => setPassword(e.target.value)}
                                value={PN.convertEnToPe(password)}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    disabled: false,
                                }}
                            />
                            <CustomInput
                                labelText=" تکرار رمز عبور"
                                id='repassword'
                                name="repassword"
                                type="password"
                                onChange={e => setRepassword(e.target.value)}
                                value={PN.convertEnToPe(repassword)}
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
                                onClick={() => submitHandler('register')}
                                target="_blank"
                                fullWidth
                            >
                               {PN.convertEnToPe(' ثبت نام')}
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <Button
                                color=" "
                                onClick={() => submitHandler('login')}
                                target="_blank"
                                fullWidth
                            >
                                می خوام وارد بشم  !
                            </Button>
                        </GridItem>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </>
    )

}
