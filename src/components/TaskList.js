import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  console.log(tasks)

  const taskCardArray = tasks.map(task => {
    return <Task key={task.text} category={task.category} task={task.text}/>
  })

  return (
    <div className="tasks">
      {taskCardArray}
    </div>
  );
}

export default TaskList;
