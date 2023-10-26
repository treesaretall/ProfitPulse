import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputCard() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <TextField id="outlined-basic" label="Taxes" variant="outlined" />
      <TextField id="outlined-basic" label="Fees" variant="outlined" />
      <TextField id="outlined-basic" label="Purchase Date" variant="outlined" />
    </Box>
  );
}
