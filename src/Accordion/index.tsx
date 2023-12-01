import React, { FC } from "react";
import { AccordionProps } from "@mui/material/Accordion";
import { MuiAccordion, MuiAccordionSummary, MuiExpandMoreIcon } from "./style";
import { Typography } from "@mui/material";

export interface IAccordionProps extends AccordionProps {
  label?: string;
  className?: string;
}

const Accordion: FC<IAccordionProps> = ({ children, label, ...props }) => {
  return (
    <MuiAccordion {...props}>
      <MuiAccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<MuiExpandMoreIcon />}
        id="panel1a-header"
      >
        <Typography color="primary">{label}</Typography>
      </MuiAccordionSummary>
      {children}
    </MuiAccordion>
  );
};

export { Accordion };
