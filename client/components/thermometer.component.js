import React, { useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';
import { ContentBlock, ItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import _ from 'lodash';

const socket = io();

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

  socket.on('thermos', (data) => {
    console.log(data);
    setTemperature(_.get(data, 'celsius', 0));
  });

  return (
    <ItemBlock>
      <Title2>TEMPERATURE</Title2>
      <ContentBlock>
        <TemperatureBlock>{temperature}°C</TemperatureBlock>
      </ContentBlock>
    </ItemBlock>
  );
};
