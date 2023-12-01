import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from ".";
import { MuiAccordionDetails, MuiCheckbox } from "./style";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion | any> = (args) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#ff8800",
          },
        },
      })}
    >
      <div style={{ width: "240px" }}>
        <Accordion {...args}>
          {[1, 2, 3].map((item, index) => (
            <MuiAccordionDetails key={index}>
              <MuiCheckbox checked={!(index % 2)} />
              <span>{item}</span>
            </MuiAccordionDetails>
          ))}
        </Accordion>
      </div>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});

Default.args = {
  label: "Filter",
};
