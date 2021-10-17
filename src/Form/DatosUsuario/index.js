import React from "react";
import { TextField, Button, Box } from "@mui/material";

class DatosUsuario extends React.Component {
  render() {
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }
}

export default DatosUsuario;
