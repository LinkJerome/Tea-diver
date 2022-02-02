import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HalfItemBlock } from '../subComponent/itemBlock.styled';
import { getBrewTime, getIsPlouf } from '../../reducer/selectors';
import { Timer } from './subComponents/timer.component';
import { LaunchButton } from './subComponents/launcherButton.component';
import { shakeTea } from '../../reducer/actions';

export const Launcher = () => {
  const dispatch = useDispatch();
  const brewTime = useSelector(getBrewTime);
  const isPlouf = useSelector(getIsPlouf);
  const [totalSeconds, setTotalSeconds] = useState(brewTime * 60);

  useEffect(() => {
    setTotalSeconds(brewTime * 60);
    if (isPlouf) {
      const interval = setInterval(() => {
        if (totalSeconds > 0) {
          dispatch(shakeTea());
          setTotalSeconds((oldSeconds) => oldSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [brewTime, isPlouf]);

  return (
    <HalfItemBlock>
      {!isPlouf && <LaunchButton />}
      {isPlouf && <Timer nbSeconds={totalSeconds} />}
    </HalfItemBlock>
  );
};
