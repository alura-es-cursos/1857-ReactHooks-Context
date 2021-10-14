import React from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import { flexbox } from "@mui/system";

const Form = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={`${process.env.PUBLIC_URL + "/favicon.png"}`} />{" "}
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        <DatosUsuario />
        <DatosPersonales />
        <DatosEntrega />
      </FormSpace>
    </Box>
  );
};

export default Form;
