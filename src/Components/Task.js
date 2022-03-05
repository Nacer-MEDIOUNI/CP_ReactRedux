import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../JS/Actions/actions";
import Edit from "./Edit";

const Task = ({ task, id, description, done }) => {
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
    <div class="task">
      <p style={styles}>{description}</p>

      <div className="task-btn">
        <Edit task={task} />
        <button class="block" onClick={handleDelete}>
          ⛔
        </button>
        <button className="block" onClick={handleDone}>
          {done ? "👏" : "✔"}
        </button>
      </div>
    </div>
  );
};

export default Task;
