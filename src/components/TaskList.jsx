import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4 mx-2">
        <h1>
          Nº of tasks: <span className="text-xl font-bold">{tasks.length}</span>
        </h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm hover:bg-indigo-700"
        >
          Create Task
        </Link>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3 className="font-extrabold">{task.title}</h3>
                <div className="flex gap-x-2 justify-center">
                  <Link
                    to={`/edit-task/${task.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md hover:bg-zinc-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p className="mt-4 text-sm">{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
