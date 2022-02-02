import React from 'react';
import { ContentBlock, HalfItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import { BigValueDisplay } from './subComponent/bidValueDisplay.styled';

export const Launcher = () => {
  return (
    <HalfItemBlock>
      <Title2>TIME REMAINING</Title2>
      <ContentBlock>
        <BigValueDisplay>1:30</BigValueDisplay>
      </ContentBlock>
    </HalfItemBlock>
  );
};
