import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updatePlouf } from '../../../reducer/actions';
import { getBrewTime } from '../../../reducer/selectors';

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

  &:disabled {
    background-color: #595858;
  }
`;

export const LaunchButton = () => {
  const dispatch = useDispatch();
  const brewTime = useSelector(getBrewTime);

  const onClickPlouf = () => {
    console.log('YOU CLICKED !');
    dispatch(updatePlouf());
  };

  return (
    <BigButtonBlock disabled={brewTime === 0} onClick={onClickPlouf}>
      LAUNCH
    </BigButtonBlock>
  );
};
