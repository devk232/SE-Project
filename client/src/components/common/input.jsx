import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  label,
  autoFocus,
  type,
  handleShowPassword,
  handleChange,
  value
}) => {
  return (
    <TextField
      name={name}
      variant="outlined"
      onChange={handleChange}
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      margin="normal"
      className="p-2"
      value={value}
      InputProps={
        name === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}> 
                {type === "password" ? <Visibility/> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default Input;
