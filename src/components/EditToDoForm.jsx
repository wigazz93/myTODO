import React, { useState } from "react";

const EditToDoForm = ({ updateTask, task }) => {
  const [val, setVal] = useState(task.task);

  function handleSub(e) {
    e.preventDefault();
    updateTask(val, task.id);
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
          placeholder="update task "
        />
        <button type="submit" className="todo-btn">
          Update task
        </button>
      </form>
    </>
  );
};

export default EditToDoForm;
