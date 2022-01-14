import React from 'react';
import styled, { css } from 'styled-components';
import { desktopQuery } from '../mixins/reponsive';

const BodyBlock = styled.div`
  display: flex;
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

export const Body = () => {
  return (
    <BodyBlock>
      <h1>Welcome to Tea-Diver</h1>
    </BodyBlock>
  );
};
