import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeProvider, createTheme } from "@mui/material";
import { Modal } from ".";

export default {
  title: "ReactComponentLibrary/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
  active,
  onClick,
  onClose,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>Open</div>
      <Modal
        active={open}
        onClick={() => setOpen(false)}
        onClose={() => setOpen(false)}
        {...args}
      >
        {<div>"CONTENT"</div>}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  modalTitle: "Large modal",
};
