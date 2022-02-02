import React, { useEffect } from 'react';
import { Title2 } from '../../subComponent/title.styled';
import { ContentBlock } from '../../subComponent/itemBlock.styled';
import { BigValueDisplay } from '../../subComponent/bidValueDisplay.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updatePlouf } from '../../../reducer/actions';

export const Timer = ({ nbSeconds }) => {
  const dispatch = useDispatch();
  const min = Math.trunc(nbSeconds / 60);
  const sec = nbSeconds - min * 60;

  useEffect(() => {
    if (nbSeconds === 0) {
      dispatch(updatePlouf(false));
    }
  }, [nbSeconds]);

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
