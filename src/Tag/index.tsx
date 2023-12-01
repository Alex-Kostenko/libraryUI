import React, { FC } from "react";
import SkillsOrange from "./style";

export interface TagProps {
  className?: string;
  children: string;
}

const Tag: FC<TagProps> = ({ children, className }: any) => (
  <SkillsOrange className={className}>
    <p>{children}</p>
  </SkillsOrange>
);

export { Tag };
