import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const ApiDataBlock = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export const ApiData = () => {
  const [teaData, setTeaData] = useState({});
  const [selectedTea, setSelectedTea] = useState('null');
  const url = 'https://tea-api-vic-lo.herokuapp.com/tea';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log({ data });
        setTeaData(data);
      });
  }, []);

  const teaSelector = (event) => {
    console.log('Selected tea : ', event.target.value);
    setSelectedTea(event.target.value);
  };

  return (
    <ApiDataBlock>
      <h2>Api data component</h2>

      <>
        <label htmlFor="tea">Choose a tea:</label>
        <select name="tea" id="tea" onChange={teaSelector}>
          <option value="null"> </option>;
          {_.map(teaData, (tea) => {
            const name = tea.name;
            return <option value={name}>{name}</option>;
          })}
        </select>
      </>
    </ApiDataBlock>
  );
};
