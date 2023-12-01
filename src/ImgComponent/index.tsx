import React, { FC } from "react";

export interface ImgComponentProps {
  onClick?: any;
  children?: any;
}

const ImgComponent: FC<ImgComponentProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export { ImgComponent };
