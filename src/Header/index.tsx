import React, { FC } from "react";

import {
  Description,
  DescriptionContainer,
  DescriptionLink,
  HeadBlock,
  Wrapper,
  Line,
} from "./style";

export interface HeaderComponentProps {
  logo?: any;
  left?: any;
  middle?: any;
  right?: any;
  className?: string;
}

const HeaderComponent: FC<HeaderComponentProps> = ({
  className,
  left,
  middle,
  right,
  logo,
}) => {
  return (
    <Wrapper className={className}>
      <HeadBlock>{logo}</HeadBlock>
      <DescriptionContainer>
        <Description>{left}</Description>
        <DescriptionLink>{middle}</DescriptionLink>
        <Line />
        <div>{right}</div>
      </DescriptionContainer>
    </Wrapper>
  );
};

export { HeaderComponent };
