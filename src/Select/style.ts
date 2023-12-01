import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizeSelect = styled(Select)(() => ({
  borderRadius: "4px",

  paddingRight: "16px",
  fontFamily: "Anek Latin, sans-serif",
}));

export const CustomizeInputLabel = styled(InputLabel)(() => ({
  "&.Mui-focused": {
    fontFamily: "Anek Latin, sans-serif",
  },
}));

export const CustomizeMenuItem = styled(MenuItem)(() => ({
  fontFamily: "Anek Latin, sans-serif",
}));
