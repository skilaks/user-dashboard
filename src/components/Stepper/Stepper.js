import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from 'components/CustomButtons/Button.js';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StepLabelWithStyles = withStyles({
    root: {
        fontFamily: ' "Yekan", "Helvetica", "Arial" !important',
        textAlign: 'right',
        "& :frist-child span": {
            color: 'primary'
        },
        "& :nth-child(2) span": {
            fontFamily: ' "Yekan", "Helvetica", "Arial" !important',
            textAlign: 'right',
            marginRight: '10px'

        }
    },

})((props) => <StepLabel  {...props} />)

const StepContentWithStyles = withStyles({
    root: {
        fontFamily: ' "Yekan", "Helvetica", "Arial" !important',
        textAlign: 'right',
        borderRight: '1px solid #bdbdbd',
        borderLeft: 'none !important',
        "&": {

        }
    }




})((props) => <StepContent  {...props} />)

const RightConnector = styled(StepConnector)(({ theme }) => ({

    [`& .${stepConnectorClasses.line}`]: {
        borderRight: '1px solid #bdbdbd',
        borderLeft: 'none !important'
    },
}));


export default function CustomStepper(prop) {

    const { orientation, Steps, btnColor } = prop;

   


    const [activeStep, setActiveStep] = React.useState(0);
    const [steps, setSteps] = React.useState(Steps);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const submitSelected = () => {
        prop.submitSelected(true);
    }
    return (
        <Box sx={{ maxWidth: 500 }}>
            <Stepper activeStep={activeStep} orientation={orientation} connector={<RightConnector />} >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabelWithStyles

                        >
                            {step.label}
                        </StepLabelWithStyles>
                        <StepContentWithStyles>
                            {step.component}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        color={btnColor}
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'اتمام' : 'ادامه'}
                                        {step.index ===1 ? submitSelected : null}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContentWithStyles>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
