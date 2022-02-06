import React from 'react';
import { useSelector } from 'react-redux';
import { ContentBlock, HalfItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import { BigValueDisplay } from './subComponent/bidValueDisplay.styled';
import { getTemperature } from '../reducer/selectors';

export const Thermometer = () => {
  const temperature = useSelector(getTemperature);

  return (
    <HalfItemBlock>
      <Title2>TEMPERATURE</Title2>
      <ContentBlock>
        <BigValueDisplay>{Math.trunc(temperature)}°C</BigValueDisplay>
      </ContentBlock>
    </HalfItemBlock>
  );
};
