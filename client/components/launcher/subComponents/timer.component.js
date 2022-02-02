import React from 'react';
import { Title2 } from '../../subComponent/title.styled';
import { ContentBlock } from '../../subComponent/itemBlock.styled';
import { BigValueDisplay } from '../../subComponent/bidValueDisplay.styled';
import PropTypes from 'prop-types';

export const Timer = ({ nbSeconds }) => {
  const min = Math.trunc(nbSeconds / 60) || 0;
  const sec = nbSeconds - min * 60 || 0;

  return (
    <>
      <Title2>TIME REMAINING</Title2>
      <ContentBlock>
        <BigValueDisplay>
          {min}:{sec < 10 ? '0' + sec : sec}
        </BigValueDisplay>
      </ContentBlock>
    </>
  );
};

Timer.propTypes = {
  nbSeconds: PropTypes.number.isRequired,
};
