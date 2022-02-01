import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { DataDisplayer } from './subComponent/dataDisplayer.component';
import { Title2 } from './subComponent/title.styled';
import { ContentBlock, ItemBlock } from './subComponent/itemBlock.styled';

export const ApiData = () => {
  const [teaData, setTeaData] = useState({});
  const placeHorlder = {
    Name: '',
    'Brew Time': '',
    Description: '',
    Origin: '',
    Temperature: '',
  };
  const [selectedTea, setSelectedTea] = useState(placeHorlder);
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
  };

  return (
    <ItemBlock>
      <Title2>TEA DATA</Title2>

      <ContentBlock>
        <label htmlFor="tea">Choose a tea: </label>
        <select name="tea" id="tea" onChange={teaSelector}>
          <option value="null"> </option>;
          {_.map(teaData, (tea, index) => {
            const { name } = tea;
            return (
              <option key={index} value={index}>
                {name}
              </option>
            );
          })}
        </select>

        <br />

        <DataDisplayer data={selectedTea} />
      </ContentBlock>
    </ItemBlock>
  );
};
