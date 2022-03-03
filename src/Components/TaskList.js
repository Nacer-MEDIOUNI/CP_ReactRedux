import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = ({ filter }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {todos.length > 0 ? (
        <div>
          {filter === "done"
            ? todos
                .filter((todo) => todo.done === true)
                .map((todo) => (
                  <Task
                    id={todo.id}
                    description={todo.description}
                    done={todo.done}
                  />
                ))
            : filter === "undone"
            ? todos
                .filter((todo) => todo.done === false)
                .map((todo) => (
                  <Task
                    id={todo.id}
                    description={todo.description}
                    done={todo.done}
                  />
                ))
            : todos.map((todo) => (
                <Task
                  id={todo.id}
                  description={todo.description}
                  done={todo.done}
                />
              ))}
        </div>
      ) : (
        <p>You have no TODO left!</p>
      )}
    </>
  );
};

export default TaskList;
