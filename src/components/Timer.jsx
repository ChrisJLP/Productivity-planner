import { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(5);

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

  const formattedMins = String(timerMinutes).padStart(2, "0");
  const formattedSecs = String(timerSeconds).padStart(2, "0");
  return (
    <>
      <h2>Timer</h2>
      <p>
        {formattedMins}:{formattedSecs}
      </p>
      <p>Total time worked:</p>
      <p>35:00</p>
      <p>Time left today:</p>
      <p>25:00</p>
    </>
  );
}

export default Timer;
