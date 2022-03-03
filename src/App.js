import React, { useState } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="container">
        <h3>My TODOs</h3>
        <AddTask setFilter={setFilter} />
        <TaskList filter={filter} />
      </div>
    </>
  );
}

export default App;
