import React from "react";
import { useField } from "formik";
import {
  TextField,
  OutlinedInput,
  Typography,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const AccessInputs = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div style={{ marginBottom: "5px", marginTop: "5px" }}>
        <label htmlFor="">
          {label}
          {/* <span style={{ color: "red" }}> * </span> */}
        </label>
        <br />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          onMouseLeave={() => setShowPassword(false)}
          {...field}
          helperText={errorText}
          {...props}
          fullWidth
          error={!!errorText}
          variant="outlined"
          sx={{
            input: {
              color: "#542A52",
              height: "6px",
            },
          }}
          endAdornment={
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />
        <Typography paragraph={true} sx={{ fontSize: 12, color: "red", textAlign: 'left', margin: 2, }}>
          {errorText}
        </Typography>
      </div>
    </div>
  );
};

export default AccessInputs;
