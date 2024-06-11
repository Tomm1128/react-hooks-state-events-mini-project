import React from "react";

function Task({category, task}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
