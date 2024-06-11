import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTasks] = useState(TASKS)

  const deleteTasks = (event) => {
    const currentTask = event.target.parentElement.childNodes[1].textContent
    const updatedTaskList = taskList.filter(task => task.text !== currentTask)
    setTasks(updatedTaskList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={taskList} handleDelete={deleteTasks}/>
    </div>
  );
}

export default App;
