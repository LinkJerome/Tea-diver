import React from 'react';
import styled from 'styled-components';

const ApiDataBlock = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export const ApiData = () => {
  const url = 'https://tea-api-vic-lo.herokuapp.com/tea';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log({ data });
    });

  return (
    <ApiDataBlock>
      <h2>Api data component</h2>
    </ApiDataBlock>
  );
};
