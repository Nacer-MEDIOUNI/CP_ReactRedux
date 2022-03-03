import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/actions";

const AddTask = ({ setFilter }) => {
  const [input, setInput] = useState("");
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();

  const onAddsubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form className="add-form" onSubmit={onAddsubmit}>
      <div className="form-control">
        <div className="input-control">
          <input
            onChange={inputChange}
            value={input}
            type="text"
            placeholder="Add todos..."
            required
          />
          <button className="input-btn" type="submit">
            Add Todo
          </button>
        </div>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="btn btn-block"
        >
          <option value="all">All Todos</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
      </div>
    </form>
  );
};

export default AddTask;
