import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderComponent } from ".";

export default {
  title: "ReactComponentLibrary/Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent | any> = () => {
  return (
    <HeaderComponent left="text" middle="text link" right="btn" logo="LOGO" />
  );
};

export const Default = Template.bind({});
