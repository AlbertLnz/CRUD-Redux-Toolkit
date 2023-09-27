import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/taskList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/create-task" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
