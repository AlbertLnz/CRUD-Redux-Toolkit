import { useSelector } from "react-redux";

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
