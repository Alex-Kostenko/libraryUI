import React, { FC } from "react";
import {
  FormControlLabel,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";
import { CustomizeCheckbox } from "./style";
import { CheckboxCheckIcon, CheckboxNotCheckIcon } from "../Icons";

export interface CheckboxProps extends MuiCheckboxProps {
  labelPlacement?: "start" | "end" | "top" | "bottom";
  className?: string;
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  labelPlacement,
  className,
  label,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <CustomizeCheckbox
          {...props}
          className={className}
          icon={<CheckboxNotCheckIcon />}
          checkedIcon={<CheckboxCheckIcon />}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export { Checkbox };
