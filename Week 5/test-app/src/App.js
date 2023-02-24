// import "./App.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
import TaskData from "./components/TaskData";

function App() {
  const [taskList, setTaskList] = useState(TaskData);

  const deleteTask = (id) => {
    // console.log(id);
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };
  return (
    <div className="container">
      <h1>Welcome to Task Manager</h1>
      <Tasks
        taskList={taskList}
        handelDelete={deleteTask}
        handelChecked={checkTask}
      />
    </div>
  );
}

export default App;
