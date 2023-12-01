import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectComponent } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Select",
  component: SelectComponent,
  argTypes: {
    color: { control: { type: "select", options: ["#e10000", "#fbff00"] } },
    label: { control: "text" },
    variant: {
      control: { type: "select", options: ["standard", "outlined", "filled"] },
    },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = ({
  color,
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
    <SelectComponent {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Age",
  menuItems: [
    { value: "1", label: "test1" },
    { value: "2", label: "test2" },
    { value: "3", label: "test3" },
  ],
};
