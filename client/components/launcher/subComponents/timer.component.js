import React, { useEffect, useState } from 'react';
import { Title2 } from '../../subComponent/title.styled';
import { ContentBlock } from '../../subComponent/itemBlock.styled';
import { BigValueDisplay } from '../../subComponent/bidValueDisplay.styled';

export const Timer = (nbSeconds) => {
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  console.log({ nbSeconds });

  useEffect(() => {
    const min = Math.trunc(nbSeconds / 60);
    const sec = nbSeconds - min * 60;
    setMinutes(() => min.toString());
    setSeconds(() => sec.toString());
  }, [nbSeconds]);

  return (
    <>
      <Title2>TIME REMAINING</Title2>
      <ContentBlock>
        <BigValueDisplay>
          {minutes}:{seconds}
        </BigValueDisplay>
      </ContentBlock>
    </>
  );
};
