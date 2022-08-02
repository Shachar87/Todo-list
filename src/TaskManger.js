const tasksArray = [
    { id:1, desc: "Task 1", isChecked: true },
    { id:2, desc: "Task 2", isChecked: false },
    { id:3, desc: "Task 3", isChecked: true },
  ];


function getTasks() {
    return tasksArray;
}


function updateTask(id, desc, isChecked){
   let task = getTasks().find((item) => item.id === id)
   task.isChecked = isChecked;
   task.desc = desc;
   console.info(tasksArray)
}

const TaskManger = {
    getTasks, updateTask
}

export default TaskManger
