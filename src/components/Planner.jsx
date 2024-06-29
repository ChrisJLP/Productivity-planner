import { useState } from "react";
import Timer from "./Timer.jsx";

function Planner() {
  const [taskInputVal, setTaskInputVal] = useState("");
  const [workTimeVal, setWorkTimeVal] = useState(0);
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
      <h2>Planner</h2>
      <label htmlFor="task-entry">What do you want to achieve today?</label>
      <input
        type="text"
        id="task-entry"
        name="task-entry"
        value={taskInputVal}
        onChange={handleTaskChange}
      />
      <label htmlFor="work-time-entry">
        How long do you want to work today?
      </label>
      <input
        type="number"
        name="work-time-entry"
        value={workTimeVal}
        min="10"
        max="600"
        onChange={handleTimeChange}
      />
      <label htmlFor="default-time-entry">Default timer length?</label>
      <input
        type="number"
        name="default-time-entry"
        value={defaultTimeVal}
        min="10"
        max="60"
        onChange={handleDefaultTimeChange}
      />
      <Timer mins={defaultTimeVal} totalTimeToWork={workTimeVal} />
    </>
  );
}

export default Planner;
