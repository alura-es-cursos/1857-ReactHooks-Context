import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const Img = styled.img`
  width: 70%;
`;

const Complete = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">!Gracias por tu registro¡</Typography>
      <Img src="/complete.png" />
    </Box>
  );
};

export default Complete;
