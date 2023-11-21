import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
uuidv4();

const ToDoWrapper = () => {
  const [task, setTask] = useState([]);

  function addTask(val) {
    setTask([
      ...task,
      { id: uuidv4(), task: val, completed: false, isEditing: false },
    ]);
    console.log(task);
  }

  function toggleComplTask(id) {
    setTask(
      task.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  }

  function delToDo(id) {
    setTask(task.filter((el) => el.id !== id));
  }

  function editToDo(id) {
    setTask(
      task.map((el) =>
        el.id === id ? { ...el, isEditing: !el.isEditing } : el
      )
    );
  }
  function updateTask(item, id) {
    setTask(
      task.map((el) =>
        el.id === id ? { ...el, task: item, isEditing: !el.isEditing } : el
      )
    );
  }

  return (
    <div className="ToDoWrapper">
      <h1>Let's do it</h1>
      <ToDoForm addTask={addTask} />
      {task.map((el, index) =>
        el.isEditing ? (
          <EditToDoForm updateTask={updateTask} task={el} />
        ) : (
          <ToDo
            editToDo={editToDo}
            delToDo={delToDo}
            toggleComplTask={toggleComplTask}
            key={index}
            task={el}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
