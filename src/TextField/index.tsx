import React, { FC } from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { CustomizeTextField } from "./style";

export type CustomTextFieldProps = MuiTextFieldProps & {
  className?: string;
  label?: string;
  variant?: "filled" | "outlined" | "standard";
  helperText?: string;
  maxRows?: number;
  multiline?: boolean;
  placeholder?: string;
};

const TextField: FC<CustomTextFieldProps> = ({ className, ...props }) => {
  return <CustomizeTextField {...props} className={className} />;
};

export { TextField };
