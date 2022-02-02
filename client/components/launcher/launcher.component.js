import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HalfItemBlock } from '../subComponent/itemBlock.styled';
import { getBrewTime, getIsPlouf } from '../../reducer/selectors';
import { Timer } from './subComponents/timer.component';
import { LaunchButton } from './subComponents/launcherButton.component';

export const Launcher = () => {
  const brewTime = useSelector(getBrewTime);
  const isPlouf = useSelector(getIsPlouf);
  const [totalSeconds, setTotalSeconds] = useState(brewTime * 60);

  useEffect(() => {
    if (isPlouf) {
      setTotalSeconds(brewTime * 60);
      const interval = setInterval(() => {
        if (totalSeconds > 0) {
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
