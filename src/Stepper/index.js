import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = () => {
  const steps = ["Datos de usuario", "Datos personales", "Datos de entrega"];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={0}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
