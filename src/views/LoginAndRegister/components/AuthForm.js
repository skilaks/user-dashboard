import React, { useState, useEffect } from 'react'

import AddAlert from "@material-ui/icons/AddAlert";
// import Countdown from 'react-countdown';
import { Statistic } from 'antd'
import PN from 'persian-number'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Logo from "assets/img/logo.png";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from "components/CustomButtons/Button.js";


export default function AuthForm(prop) {
    const { classes, authHandler, } = prop;
    //--------------------------
    const [authNumber, setAuthNumber] = useState('');
    const [alert, setAlert] = useState(false);
    const [resend, setResend] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [deadline, setDeadline] = useState('')
    const { Countdown } = Statistic;

    //------------------------------------------
    const submitHandler = (flag) => {

        if (authNumber !== '' && flag == 'auth') {
            authHandler({ authNumber: PN.convertPeToEn(authNumber) });
            setAuthNumber('');
        } else if (flag == 'auth' && authNumber == '') {
            setMessageAlert('لطفا کد احراز را وارد نمایید')
            showNotificationHandler(true)
            setAuthNumber('');
        }
    }

    const reSendAuthCodeHandler = function () {
        setDeadline(Date.now() + 1000 * 2);
        setResend(false)
    }
    
    const showNotificationHandler = (flag) => {

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
    useEffect(function () {
        setDeadline(Date.now() + 1000 * 2);

    }, [])
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
            <GridContainer withoutMargin  >
                <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                    <GridItem xs={12} sm={6} md={3}   >
                        <div className={classes.formSignin}>
                            <img src={Logo} alt='logo' className={classes.imgInherit} />
                            <CustomInput
                                labelText="کد احراز"
                                id='auth'
                                name="auth"
                                onChange={e => setAuthNumber(e.target.value)}
                                value={PN.convertEnToPe(authNumber)}

                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    disabled: false,
                                }}
                            />

                        </div>
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <GridItem xs={12} sm={6} md={6} >


                                <Countdown format='mm:ss' value={deadline} onFinish={(e) => setResend(true)} />

                            </GridItem>
                            <GridItem xs={12} sm={6} md={5} >
                                {resend && <Button
                                    color="transparent"
                                    onClick={() => reSendAuthCodeHandler()}
                                    simple
                                    target="_blank"
                                    fullWidth
                                >
                                    {PN.convertEnToPe('ارسال دوباره')}
                                </Button>}
                            </GridItem>
                        </GridItem>

                        {/* <CountDownTimer onSeconde={60} /> */}
                        <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                            <Button
                                color="rose"
                                onClick={() => submitHandler('auth')}
                                target="_blank"
                                fullWidth
                            >
                                {PN.convertEnToPe('احراز شماره')}
                            </Button>
                        </GridItem>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </>
    )

}
