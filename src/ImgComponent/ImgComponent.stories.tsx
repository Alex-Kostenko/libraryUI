import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ImgComponent } from ".";

export default {
  title: "ReactComponentLibrary/ImgComponent",
  component: ImgComponent,
} as ComponentMeta<typeof ImgComponent>;

const Template: ComponentStory<typeof ImgComponent | any> = (args) => {
  return (
    <ImgComponent {...args}>
      <ExpandMoreIcon />
    </ImgComponent>
  );
};
export const Default = Template.bind({});

Default.args = {
  onClick: () => console.log("1"),
};
