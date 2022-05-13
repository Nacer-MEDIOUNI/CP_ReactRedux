import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [filter, setFilter] = useState("");
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="container">
        <h3
          style={{
            textAlign: "center",
            textDecoration: "underline",
            textDecorationColor: "aquamarine",
            textDecorationStyle: "double",
          }}
        >
          My Todo List
        </h3>
        <AddTask setFilter={setFilter} />
        <TaskList tasks={todos} filter={filter} />
      </div>
    </>
  );
}

export default App;
