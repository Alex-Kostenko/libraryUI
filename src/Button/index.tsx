import React, { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

import { CustomizeBtn } from "./style";

export interface ButtonComponentProps extends MuiButtonProps {
  mode?: "dark" | "light";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  sx?: object;
  className?: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ children, ...props }) => {
  return <CustomizeBtn {...props}>{children}</CustomizeBtn>;
};

export { ButtonComponent };
