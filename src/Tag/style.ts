import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SkillsOrange = styled(Box)(() => ({
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "center",
  width: "fit-content",
  alignItems: "center",
  background: "#fff7ee",
  borderRadius: "2px",
  transition: "var(--transition)",
  textTransform: "none",
  boxShadow: "none",
  height: "32px",
  padding: "6px 12px",
  border: "1px solid #f2d8ba",
  fontFamily: "Anek Latin, sans-serif",

  "& p": {
    fontSize: "16px",
    lineHeight: "130%",
    fontStyle: "normal",
    fontWeight: 500,
    color: "#27262b",
    display: "flex",
    alignItems: "center",
  },
}));

export default SkillsOrange;
