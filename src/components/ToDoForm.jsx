import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [val, setVal] = useState("");

  function handleSub(e) {
    e.preventDefault();
    addTask(val);
    setVal("");
  }

  return (
    <>
      <form className="ToDoForm" onSubmit={handleSub}>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="your task today "
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default ToDoForm;
