import React, { useState, useEffect } from 'react'

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AuthForm from './components/AuthForm';
import CompletionForm from './components/CompletionForm';


const useStyles = makeStyles(styles);

export default function LoginAndRegister() {
    const classes = useStyles();
    //-----------------------
    const [step, setStep] = useState(4);
    //------------------
    const nextStep = () => {
        setStep(prev => prev + 1);

    }
    const prevStep = () => {
        setStep(prev => prev - 1);
    }
    const loginHandler = (data) => {
        console.log(data)
    }
    const registerHandler = (data) => {
        console.log(data)
        nextStep();

    }
    const authHandler = (data) => {
        console.log(data)
        // nextStep();

    }
    const completionHandler = (data) => {
        console.log(data);
    }
    //-----------------

    switch (step) {
        case 1:
            return (
                <LoginForm classes={classes} nextStep={nextStep} loginHandler={loginHandler} />
            )
        case 2:
            return (
                <RegisterForm classes={classes} pervStep={prevStep} registerHandler={registerHandler} />
            )
        case 3:
            return (
                <AuthForm classes={classes}  authHandler={authHandler} />
            )
            case 4 :
                return (
                    <CompletionForm classes={classes} completionHandler={completionHandler} />
                )
    }

}


