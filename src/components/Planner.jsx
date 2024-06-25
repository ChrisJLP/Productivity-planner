import { useState } from "react";

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
      <p>What do you want to achieve today?</p>
      <input
        type="text"
        name="task-entry"
        value={taskInputVal}
        onChange={handleTaskChange}
      />
      <p>How long do you want to work today?</p>
      <input
        type="number"
        name="work-time-entry"
        value={workTimeVal}
        min="10"
        onChange={handleTimeChange}
      />
      <p>Default timer length?</p>
      <input
        type="number"
        name="default-time-entry"
        value={defaultTimeVal}
        min="10"
        onChange={handleDefaultTimeChange}
      />
    </>
  );
}

export default Planner;
