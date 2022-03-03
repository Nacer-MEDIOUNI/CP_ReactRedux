import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../JS/Actions/actions";

const Task = ({ id, description, done }) => {
  const dispatch = useDispatch();

  const styles = {
    textDecoration: done ? "line-through" : "none",
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleDone = () => {
    dispatch(doneTodo(id));
  };
  return (
    <div className="task">
      <span style={styles}>{description}</span>
      <div className="task-btn">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn" onClick={handleDone}>
          {done ? "undone" : "done"}
        </button>
      </div>
    </div>
  );
};

export default Task;
