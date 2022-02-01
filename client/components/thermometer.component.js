import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentBlock, ItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';

const TemperatureBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xxx-large;

  height: 100%;
  width: 100%;
`;

export const Thermometer = () => {
  const [temperature, setTemperature] = useState(18);

  useEffect(() => {
    setTemperature(5);
  }, [setTemperature]);

  return (
    <ItemBlock>
      <Title2>TEMPERATURE</Title2>
      <ContentBlock>
        <TemperatureBlock>{temperature}°</TemperatureBlock>
      </ContentBlock>
    </ItemBlock>
  );
};
