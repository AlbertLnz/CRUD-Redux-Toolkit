import { useSelector } from "react-redux";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  console.log(tasks);

  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        );
      })}
    </>
  );
};
