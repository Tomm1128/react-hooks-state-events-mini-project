import React from "react";

import Task from "./Task"

function TaskList({ tasks, handleDelete }) {
  const taskCardArray = tasks.map(task => {
    return (
    <Task
      key={task.text}
      category={task.category}
      text={task.text}
      handleDelete={handleDelete}
    />)
  })

  return (
    <div className="tasks">
      {taskCardArray}
    </div>
  );
}

export default TaskList;
