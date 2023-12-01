import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Text Field",
  component: TextField,
  argTypes: {
    className: {
      description: "STRING",
    },

    color: { control: { type: "select", options: ["#e10000", "#fbff00"] } },
    variant: {
      description: "Variant Text Field",
      control: {
        type: "radio",
        options: ["filled", "outlined", "standard"],
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = ({ color, ...args }) => (
  <ThemeProvider
    theme={createTheme({
      palette: {
        primary: {
          main: color ?? "#01ff38",
        },
        secondary: {
          main: color ?? "#01ff38",
        },
        action: { active: color ?? "#01ff38" },
      },
    })}
  >
    <TextField {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  className: "test-text-field",
  helperText: "helper text",
  maxRows: 2,
  multiline: true,
  placeholder: "component Text Field",
};
