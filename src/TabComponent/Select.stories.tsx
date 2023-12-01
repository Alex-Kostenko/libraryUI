import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabsComponent from ".";

export default {
  title: "ReactComponentLibrary/TabComponent",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent | any> = ({ ...args }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTabs = (newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <TabsComponent
        selectedTab={selectedTab}
        handleChangeTab={handleChangeTabs}
        {...args}
      />
      {0 === selectedTab && <div>Candidates</div>}
      {1 === selectedTab && <div>Contracts</div>}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: [false, false],
  labels: ["Search for Candidates", "Search for Contracts"],
};
