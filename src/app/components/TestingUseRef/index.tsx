import { useRef, useState } from 'react';

export function TestingUseRef() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef?.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className='content-box'>
      <h1>Testing useRef</h1>
      <br />
      <p>
        Time passed: <br />
        {secondsPassed.toFixed(3)}
      </p>

      <div className='buttons'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}
