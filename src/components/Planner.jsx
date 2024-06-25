import { useState } from "react";

function Planner() {
  const { taskInputVal, setTaskInputVal } = useState("");
  const { workTimeVal, setWorkTimeVal } = useState("");

  return (
    <>
      <p>What do you want to achieve today?</p>
      <input type="text" name="task-entry" value={taskInputVal} />
      <p>How long do you want to work today?</p>
      <input type="text" name="work-time-entry" value={workTimeVal} />
    </>
  );
}

export default Planner;
