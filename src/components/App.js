import React, { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTasks] = useState(TASKS)
  const [categoryFilter, setCategoryFilter] = useState("All")

  const updateTaskList = (updatedList) => {
    setTasks(updatedList)
  }

  const deleteTasks = (event) => {
    const currentTask = event.target.parentElement.childNodes[1].textContent
    const updatedTaskList = taskList.filter(task => task.text !== currentTask)
    setTasks(updatedTaskList)
  }

  const filterTaskList = () => {
    let currentTasks = taskList.filter(task => task.category === categoryFilter)
    updateTaskList(currentTasks)
  }

  const filterCategory = (event) => {
    if (event.target.className)
      event.target.className = ""
    else
      event.target.className = "selected"

    setCategoryFilter(event.target.textContent)
    filterTaskList()
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterCategory} />
      <NewTaskForm />
      <TaskList tasks={taskList} handleDelete={deleteTasks} currentFilter={categoryFilter}/>
    </div>
  );
}

export default App;
