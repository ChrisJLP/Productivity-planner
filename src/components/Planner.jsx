import { useState } from "react";
import Timer from "./Timer.jsx";
import styles from "../styles/Planner.module.css";

function Planner() {
  const [taskInputVal, setTaskInputVal] = useState("");
  const [workTimeVal, setWorkTimeVal] = useState(60);
  const [defaultTimeVal, setDefaultTimeVal] = useState(25);

  const handleTaskChange = (e) => {
    setTaskInputVal(e.target.value);
  };

  const handleTimeChange = (e) => {
    setWorkTimeVal(e.target.value);
  };

  const handleDefaultTimeChange = (e) => {
    setDefaultTimeVal(e.target.value);
  };

  return (
    <>
      <div className={styles.plannerContainer}>
        <h2 className={styles.plannerTitle}>Planner</h2>
        <label htmlFor="task-entry" className={styles.topLabel}>
          What do you want to achieve today?
        </label>
        <input
          className={styles.textInputs}
          type="text"
          id="task-entry"
          name="task-entry"
          value={taskInputVal}
          onChange={handleTaskChange}
        />
        <div className={styles.timerPlanner}>
          <div className={styles.todayWorkLength}>
            <label htmlFor="work-time-entry" className={styles.labels}>
              Total time to work?
            </label>
            <input
              className={styles.inputs}
              type="number"
              name="work-time-entry"
              value={workTimeVal}
              min="10"
              max="600"
              onChange={handleTimeChange}
            />
          </div>
          <div className={styles.defaultTimerLength}>
            <label htmlFor="default-time-entry" className={styles.labels}>
              Default timer length?
            </label>
            <input
              className={styles.inputs}
              type="number"
              name="default-time-entry"
              value={defaultTimeVal}
              min="10"
              max="60"
              onChange={handleDefaultTimeChange}
            />
          </div>
        </div>
      </div>
      <Timer mins={defaultTimeVal} totalTimeToWork={workTimeVal} />
    </>
  );
}

export default Planner;
