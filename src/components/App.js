import React, { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTasks] = useState(TASKS)
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [isSelected, setSelected] = useState("All")
  const [formData, setFormData] = useState([])

  const onTaskFormSubmit = (newFormData) => {
    const formDataArray = [...formData, newFormData]
    setFormData(formDataArray)
    setTasks([...taskList, newFormData])
  }

  const deleteTasks = (event) => {
    const currentTask = event.target.parentElement.childNodes[1].textContent
    const updatedTaskList = taskList.filter(task => task.text !== currentTask)
    setTasks(updatedTaskList)
  }

  const filterCategory = (event) => {
    setSelected(event.target.textContent)
    setCategoryFilter(event.target.textContent)
  }

  let currentTasks = taskList.filter(task => {
    if (categoryFilter === "All"){
      return true
    }
    else {
      return task.category === categoryFilter
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterCategory} isSelected={isSelected} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={currentTasks} handleDelete={deleteTasks} currentFilter={categoryFilter}/>
    </div>
  );
}

export default App;
