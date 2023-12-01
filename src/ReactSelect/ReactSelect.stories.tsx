import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputActionMeta } from "react-select";
import { MainSearchStyles } from "./utils";
import { SearchSelect } from ".";

export default {
  title: "ReactComponentLibrary/Search Select",
  component: SearchSelect,
} as ComponentMeta<typeof SearchSelect>;

const Template: ComponentStory<typeof SearchSelect> = (args) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <SearchSelect
      {...args}
      menuIsOpen={menuIsOpen}
      onInputChange={(input: InputActionMeta) => setMenuIsOpen(!!input)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  size: "small",
  options: [
    {
      label: "Countries",
      options: [
        { group: "Countries", label: "Afghanistan", value: 1 },
        { group: "Countries", label: "Albania", value: 2 },
      ],
    },
  ],
  onChange: (selectedOptions: any) => {
    console.log("fff", selectedOptions);
  },
  placeholder: "Search by title, skill, etc.",
  styles: MainSearchStyles,
};
