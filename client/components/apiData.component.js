import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { DataDisplayer } from './subComponent/dataDisplayer.component';
import { Title2 } from './subComponent/title.styled';
import { ContentBlock, ItemBlock } from './subComponent/itemBlock.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateTea } from '../reducer/actions';
import { getSelectedTea } from '../reducer/selectors';

export const ApiData = () => {
  const dispatch = useDispatch();
  const selectedTea = useSelector(getSelectedTea);

  const [teaData, setTeaData] = useState({});
  const url = 'https://tea-diver-tiw8.herokuapp.com/tea';

  useEffect(() => {
    fetch(url, {method: 'GET', mode: 'no-cors'})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeaData(data);
      });
  }, []);

  const teaSelector = (event) => {
    const { value } = event.target;
    const currentTea = teaData[value];
    const selectTea = {
      Name: currentTea.name,
      'Brew Time': currentTea.brew_time,
      Description: currentTea.description,
      Origin: currentTea.origin,
      Temperature: currentTea.temperature,
    };
    dispatch(updateTea(selectTea));
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
