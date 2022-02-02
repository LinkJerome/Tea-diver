import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentBlock, HalfItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import { BigValueDisplay } from './subComponent/bidValueDisplay.styled';
import { getTemperature } from '../reducer/selectors';
import { io } from 'socket.io-client';
import _ from 'lodash';
import { updateTemperature } from '../reducer/actions';

const socket = io();

export const Thermometer = () => {
  const dispatch = useDispatch();
  const temperature = useSelector(getTemperature);

  socket.on('thermos', (data) => {
    const celsius = _.get(data, 'celsius', 0);
    dispatch(updateTemperature(celsius));
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
