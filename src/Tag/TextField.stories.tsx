import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template = () => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#01ff38",
          },
        },
      })}
    >
      <Tag className="TAGGSS">Tags</Tag>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
