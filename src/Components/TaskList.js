import Task from "./Task";

const TaskList = ({ tasks, filter }) => {
 

  return (
    <>
      {tasks.length > 0 ? (
        <div>
          {filter === "done"
            ? tasks
                .filter((todo) => todo.done === true)
                .map((todo) => (
                  <Task
                    task={todo}
                    id={todo.id}
                    description={todo.description}
                    done={todo.done}
                  />
                ))
            : filter === "undone"
            ? tasks
                .filter((todo) => todo.done === false)
                .map((todo) => (
                  <Task
                    task={todo}
                    id={todo.id}
                    description={todo.description}
                    done={todo.done}
                  />
                ))
            : tasks.map((todo) => (
                <Task
                  task={todo}
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
