import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updatePlouf } from '../../../reducer/actions';

const BigButtonBlock = styled.button`
  display: flex;

  width: 200px;
  height: 200px;

  border-radius: 15px;
  background-color: green;
  color: white;
  font-size: xxx-large;

  &:disabled {
    background-color: #595858;
  }
`;

export const LaunchButton = (disabled) => {
  const dispatch = useDispatch();

  const onClickPlouf = () => {
    console.log('YOU CLICKED !');
    dispatch(updatePlouf());
  };

  return (
    <BigButtonBlock disabled={disabled} onClick={onClickPlouf}>
      LAUNCH
    </BigButtonBlock>
  );
};
