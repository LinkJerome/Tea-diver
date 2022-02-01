import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const ApiDataBlock = styled.div`
  display: block;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.QUATERNARY};
`;

const DataDisplayer = styled.div`
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: ${(props) => props.theme.QUINTERNARY};
`;

const MidBlock = styled.div`
  width: 50%;
`;

export const ApiData = () => {
  const [teaData, setTeaData] = useState({});
  const [selectedTea, setSelectedTea] = useState({});
  const url = 'https://tea-api-vic-lo.herokuapp.com/tea';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        setTeaData(data);
      });
  }, []);

  const teaSelector = (event) => {
    const { value } = event.target;
    const currentTea = teaData[value];
    setSelectedTea({
      Name: currentTea.name,
      'Brew Time': currentTea.brew_time,
      Description: currentTea.description,
      Origin: currentTea.origin,
      Temperature: currentTea.temperature,
    });
    console.log(teaData[value]);
  };

  return (
    <ApiDataBlock>
      <h2>TEA DATA</h2>

      <>
        <label htmlFor="tea">Choose a tea:</label>
        <select name="tea" id="tea" onChange={teaSelector}>
          <option value="null"> </option>;
          {_.map(teaData, (tea, index) => {
            const { name } = tea;
            return <option value={index}>{name}</option>;
          })}
        </select>

        <br />

        <DataDisplayer>
          {_.map(selectedTea, (value, key) => (
            <>
              <MidBlock>{key} : </MidBlock>
              <MidBlock>{value}</MidBlock>
            </>
          ))}
        </DataDisplayer>
      </>
    </ApiDataBlock>
  );
};
