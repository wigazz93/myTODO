import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, toggleComplTask, delToDo, editToDo }) => {
  return (
    <div className="ToDo">
      <p
        onClick={() => toggleComplTask(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editToDo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => delToDo(task.id)} />
      </div>
    </div>
  );
};

export default ToDo;
