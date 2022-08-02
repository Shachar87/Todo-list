import React from "react";
import Task from "./Task";
import TaskManger from "./TaskManger";

function App() {
  return (
    <>
      {TaskManger.getTasks().map((item) => (
        <Task 
          id={item.id}
          desc={item.desc}
          isChecked={item.isChecked}
          handleCheck={TaskManger.updateTask}
          key={item.id}></Task>
      ))}
    </>
  );
}

export default App;
