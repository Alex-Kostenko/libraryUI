import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Calendar } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Calendar",
  component: Calendar,
  argTypes: {
    color: { control: { type: "select", options: ["#e10000", "#fbff00"] } },
    colorIcon: { control: { type: "select", options: ["#3eff08", "#ff00b7"] } },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar | any> = ({
  color = "#e10000",
  ...args
}) => (
  <ThemeProvider
    theme={createTheme({
      palette: {
        primary: {
          main: color ?? "#01ff38",
        },
      },
    })}
  >
    <Calendar {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  disabled: true,
};
