import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/taskList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center h-full justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />}></Route>
            <Route path="/create-task" element={<TaskForm />}></Route>
            <Route path="/edit-task/:id" element={<TaskForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
