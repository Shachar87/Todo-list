import tasksArray from "./data.json";

function getTasks() {
  return tasksArray;
}

function updateTask(id, desc, isChecked) {
  let task = getTasks().find((item) => item.id === id);
  task.isChecked = isChecked;
  task.desc = desc;
  logTasksToConsole();
}

function logTasksToConsole() {
  getTasks().forEach((item) => {
    let info = `${item.isChecked ? "V" : "O"} ${item.desc}`;
    console.info(info);
  });
}

const TaskManger = {
  getTasks,
  updateTask,
};

export default TaskManger;
