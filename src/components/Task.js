import React from "react";

function Task({category, task, handleDelete}) {

  // const handleDelete = (event) => {
  //   const currentTask = event.target.parentElement.childNodes[1].textContent
  //   console.log(currentTask)
  // }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
