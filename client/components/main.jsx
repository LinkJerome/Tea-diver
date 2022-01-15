import React from 'react';
import styled, { css } from 'styled-components';
import { desktopQuery } from '../mixins/reponsive';
import { ApiData } from './apiData';

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.SECONDARY};
  color: ${(props) => props.theme.FONT};
  min-height: 100vh;

  ${desktopQuery(css``)}
  h1 {
    color: ${(props) => props.theme.TITRE1};
  }
  h2 {
    color: ${(props) => props.theme.TITRE2};
  }
`;

export const Main = () => {
  return (
    <MainBlock>
      <h1>Welcome to Tea-Diver</h1>
      <ApiData />
    </MainBlock>
  );
};
