import React, { useState } from 'react'

import { Stepper, Step, StepLabel, CircularProgress, Divider, Button } from '@material-ui/core';

import AddressForm from "./AddressForm/AddressForm";
import PaymentForm from "./PaymentForm/PaymentForm";

import "./styles.css";

const steps = ["Shipping", "Payment"]

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(2);

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm />
        : <PaymentForm />

    return (
        <div className="checkout">
            <h2 className="checkout__title">Checkout</h2>
            <div className="checkout__container">
                <Stepper activeStep={activeStep} className="checkout__stepper">
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </div>
        </div>
    )
}

export default Checkout
