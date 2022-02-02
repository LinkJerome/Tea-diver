import React, { useState } from 'react';
import _ from 'lodash';
import { io } from 'socket.io-client';
import { ContentBlock, HalfItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import { BigValueDisplay } from './subComponent/bidValueDisplay.styled';

const socket = io();

export const Thermometer = () => {
  const [temperature, setTemperature] = useState(18);

  socket.on('thermos', (data) => {
    console.log(data);
    setTemperature(_.get(data, 'celsius', 0));
  });

  return (
    <HalfItemBlock>
      <Title2>TEMPERATURE</Title2>
      <ContentBlock>
        <BigValueDisplay>{temperature}°C</BigValueDisplay>
      </ContentBlock>
    </HalfItemBlock>
  );
};
