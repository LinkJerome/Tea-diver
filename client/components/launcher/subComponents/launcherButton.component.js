import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { readyToPlouf, updatePlouf } from "../../../reducer/actions";
import { getBrewTime, getIsGoodTemperature } from '../../../reducer/selectors';

const BigButtonBlock = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 280px;
  height: 130px;

  margin: 10px;

  border-radius: 15px;
  background-color: green;
  color: white;
  font-size: x-large;

  &:hover {
    background-color: #004d00;
  }

  &:disabled {
    background-color: #595858;
  }
`;

export const LaunchButton = () => {
  const dispatch = useDispatch();
  const brewTime = useSelector(getBrewTime);
  const isGoodTemp = useSelector(getIsGoodTemperature);
  const isReadyToPlouf = isGoodTemp && brewTime !== 0;

  useEffect(() => {
    dispatch(readyToPlouf(isReadyToPlouf));
  }, [isGoodTemp,brewTime])

  const onClickPlouf = () => {
    dispatch(updatePlouf(true));
  };

  return (
    <BigButtonBlock disabled={!isReadyToPlouf} onClick={onClickPlouf}>
      LAUNCH
    </BigButtonBlock>
  );
};
