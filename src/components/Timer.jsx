import { useState } from "react";
import { useEffect } from "react";

function Timer({ mins, totalTimeToWork }) {
  const [timerMinutes, setTimerMinutes] = useState(mins);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [totalMinsLeft, setTotalMinsLeft] = useState(totalTimeToWork);
  const [totalSecondsLeft, setTotalSecondsLeft] = useState(10);
  const [timeWorkedMins, setTimeWorkedMins] = useState(0);
  const [timeWorkedSecs, setTimeWorkedSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      setTimerMinutes(mins);
    }
  }, [mins]);

  useEffect(() => {
    setTotalMinsLeft(totalTimeToWork);
  }, [totalTimeToWork]);

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

      setTimeWorkedSecs((prevTimeWorkedSecs) => {
        if (prevTimeWorkedSecs == 59) {
          setTimeWorkedMins((prevTimeWorkedMins) => prevTimeWorkedMins + 1);
          return 0;
        }
        return prevTimeWorkedSecs + 1;
      });

      setTotalSecondsLeft((prevTotalSecondsLeft) => {
        if (prevTotalSecondsLeft == 0) {
          setTotalMinsLeft((prevTotalMinsLeft) => {
            if (prevTotalMinsLeft == 0) {
              return 0;
            }
            return prevTotalMinsLeft - 1;
          });
          if (totalMinsLeft == 0) {
            return 0;
          }
          return 59;
        }
        return prevTotalSecondsLeft - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timerMinutes]);

  const formattedMins = String(timerMinutes).padStart(2, "0");
  const formattedSecs = String(timerSeconds).padStart(2, "0");
  const formattedTotalMins = String(totalMinsLeft).padStart(2, "0");
  const formattedTotalSecs = String(totalSecondsLeft).padStart(2, "0");
  const formattedWorkedMins = String(timeWorkedMins).padStart(2, "0");
  const formattedWorkedSecs = String(timeWorkedSecs).padStart(2, "0");

  return (
    <>
      <h2>Timer</h2>
      <p>
        {formattedMins}:{formattedSecs}
      </p>
      <button onClick={handleClick}></button>
      <p>Total time worked:</p>
      <p>
        {formattedWorkedMins}:{formattedWorkedSecs}
      </p>
      <p>Time left today:</p>
      <p>
        {formattedTotalMins}:{formattedTotalSecs}
      </p>
    </>
  );
}

export default Timer;
