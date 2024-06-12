import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [todoDetails, setTodoDetails] = useState("")
  const [categoryField, setCategoryField] = useState()

  const categoryOptions = categories.map(category => {
    if(category !== "All")
      return <option key={category}>{category}</option>
  })

  const handleData = (event) => {
    if (event.target.name === "category"){
      setCategoryField(event.target.value)
    } else {
      setTodoDetails(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newFormData = {
      text: todoDetails,
      category: categoryField
    }
    console.log(newFormData)
    onTaskFormSubmit(newFormData)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleData} value={todoDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleData}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
