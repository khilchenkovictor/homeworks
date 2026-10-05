import { useIdleTimer } from 'react-idle-timer';
import { useState, useEffect } from 'react';

function Timer({ isGameActive, onIdle }) {
  const [remaining, setRemaining] = useState(20);

  const { getRemainingTime } = useIdleTimer({
    timeout: 20000,
    onIdle: onIdle,
    debounce: 500,
    events: ['mousedown', 'keydown', 'touchstart'],
  });

  useEffect(() => {
    if (!isGameActive) {
      setRemaining(20);
      return;
    }

    setRemaining(Math.ceil(getRemainingTime() / 1000));

    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 100);

    return () => clearInterval(interval);
  }, [isGameActive, getRemainingTime]);

  if (!isGameActive) {
    return <span className="info__number">20</span>;
  }

  return (
    <span className="info__number">
      {remaining.toString().padStart(2, '0')}
    </span>
  );
}

export default Timer;
