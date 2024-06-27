import { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prevTimerSeconds) => {
        if (prevTimerSeconds === 0) {
          if (timerMinutes === 0) {
            clearInterval(interval);
            return 0;
          }
          setTimerMinutes((prevTimerMinutes) => prevTimerMinutes - 1);
          return 59;
        }
        return prevTimerSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerMinutes]);

  return (
    <>
      <h2>Timer</h2>
      {timerMinutes}:{timerSeconds}
    </>
  );
}

export default Timer;
