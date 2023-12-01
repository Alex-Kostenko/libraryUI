import React from "react";

import { Tabs, Tab, TabsProps } from "@mui/material";

import { TabComponent } from "./style";

export interface TabsComponentProps extends TabsProps {
  labels: string[];
  selectedTab: number;
  handleChangeTab: (newValue: number) => void;
  disabled?: boolean[];
}

export const TabsComponent = ({
  handleChangeTab,
  labels,
  selectedTab,
  disabled,
  ...props
}: TabsComponentProps) => {
  return (
    <TabComponent>
      <Tabs
        {...props}
        aria-label="Search Tabs"
        centered
        onChange={(_, newValue) => handleChangeTab(newValue)}
        value={selectedTab}
      >
        {labels.map((label, index) => (
          <Tab
            disabled={disabled && disabled[index]}
            key={index}
            label={label}
          />
        ))}
      </Tabs>
    </TabComponent>
  );
};

export default TabsComponent;
