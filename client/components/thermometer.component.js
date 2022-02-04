import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentBlock, HalfItemBlock } from './subComponent/itemBlock.styled';
import { Title2 } from './subComponent/title.styled';
import { BigValueDisplay } from './subComponent/bidValueDisplay.styled';
import { getTemperature } from '../reducer/selectors';
import { updateTemperature } from '../reducer/actions';

export const Thermometer = () => {
  const dispatch = useDispatch();
  const temperature = useSelector(getTemperature);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTemperature(0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HalfItemBlock>
      <Title2>TEMPERATURE</Title2>
      <ContentBlock>
        <BigValueDisplay>{temperature}°C</BigValueDisplay>
      </ContentBlock>
    </HalfItemBlock>
  );
};
