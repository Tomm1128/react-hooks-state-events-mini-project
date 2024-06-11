import React, { useState } from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [taskList, setTasks] = useState(tasks)

  const deleteTasks = (event) => {
    const currentTask = event.target.parentElement.childNodes[1].textContent
    const updatedTaskList = taskList.filter(task => task.text !== currentTask)
    setTasks(updatedTaskList)
  }

  const taskCardArray = taskList.map(task => {
    return <Task key={task.text} category={task.category} task={task.text} handleDelete={deleteTasks}/>
  })

  return (
    <div className="tasks">
      {taskCardArray}
    </div>
  );
}

export default TaskList;
