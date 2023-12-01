import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export interface StyledDatePickerProps {
  error?: boolean;
}

export const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
  width: 344px;
  --TextField-brandBorderColor: ${({ error }) =>
    error ? "#d32f2f" : "#DCDCDE"};
  --TextField-brandBorderFocusedColor: #2146af;

  ${({ error }) =>
    error &&
    css`
      .MuiFormHelperText-root,
      .MuiFormLabel-root {
        color: #d32f2f;
      }
    `}
`;
