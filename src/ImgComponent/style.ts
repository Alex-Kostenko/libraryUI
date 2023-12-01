import { Checkbox } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

export const MuiAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  fontSize: "16px",
  lineHeight: "21.6px",
  fontWeight: 600,
  fontFamily: "Anek Latin, sans-serif",
  ".Mui-expanded": {
    margin: "12px 0 !important",
    svg: {
      transform: "rotate(-360deg)",
    },
  },
  svg: {
    transform: "rotate(-90deg)",
  },
}));

export const MuiAccordionDetails = styled(AccordionDetails)`
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-family: "Anek Latin, sans-serif";
`;

export const MuiAccordion = styled(Accordion)`
  margin: 0 !important;
  box-shadow: none;
  padding: 15px 0;
  font-family: "Anek Latin, sans-serif";

  .MuiCollapse-wrapper {
    max-height: 300px;
    /* margin-bottom: 20px; */
    overflow-y: auto;
  }

  .Mui-expanded {
    min-height: 0 !important;
  }

  :before {
    opacity: 1 !important;
  }
`;

export const MuiExpandMoreIcon = styled(ExpandMoreIcon)``;
export const MuiCheckbox = styled(Checkbox)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
