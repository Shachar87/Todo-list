import React from "react";
import Task from "./Task";
import TaskManger from "./TaskManger";

function updateTask(id, desc, isChecked) {
  console.log("Update task")
  TaskManger.updateTask(id, desc, isChecked)
}

function App() {
 return (
    <>
      {TaskManger.getTasks().map((item) => (
        <Task
          id={item.id}
          desc={item.desc}
          isChecked={item.isChecked}
          onCheckChanged={updateTask}
          key={item.id}
        ></Task>
      ))}
    </>
  );
}

export default App;
