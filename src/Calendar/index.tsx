import React, { FC } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { StyledDatePicker } from "./styles";

const CalendarIcon = (colorIcon: string) => (
  <svg
    data-testid="calendar-icon"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d={
        "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1" +
        " 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38" +
        " 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
      }
      fill={colorIcon}
      fillRule="evenodd"
    />
  </svg>
);

export interface ICalendarComponent extends DatePickerProps<any> {
  errors?: any;
  label?: string;
  value?: Date;
  setValue?: (val: Date) => void;
  disablePast?: boolean;
  colorIcon?: string;
  className?: string;
}

const Calendar: FC<ICalendarComponent> = ({
  errors,
  label = "Date",
  value,
  setValue,
  disablePast = true,
  colorIcon = "#2146AF",
  className,
  ...props
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledDatePicker
      data-testid="calendarTest"
      disablePast={!!disablePast}
      error={!!errors}
      label={label}
      className={className}
      onChange={(newValue: any) => {
        if (newValue && setValue) {
          setValue(newValue);
        }
        1;
      }}
      slots={{
        openPickerIcon: () => CalendarIcon(colorIcon),
      }}
      value={value}
      {...props}
    />
  </LocalizationProvider>
);
export { Calendar };
