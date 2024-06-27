import { useState } from "react";
import { useEffect } from "react";

function Timer({ mins }) {
  const [timerMinutes, setTimerMinutes] = useState(mins);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      setTimerMinutes(mins);
    }
  }, [mins]);

  const handleClick = () => {
    setIsRunning(true);
  };
  useEffect(() => {
    if (!isRunning) return;
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
  }, [isRunning, timerMinutes]);

  const formattedMins = String(timerMinutes).padStart(2, "0");
  const formattedSecs = String(timerSeconds).padStart(2, "0");
  return (
    <>
      <h2>Timer</h2>
      <p>
        {formattedMins}:{formattedSecs}
      </p>
      <button onClick={handleClick}></button>
      <p>Total time worked:</p>
      <p>35:00</p>
      <p>Time left today:</p>
      <p>25:00</p>
    </>
  );
}

export default Timer;
