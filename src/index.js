document.addEventListener("DOMContentLoaded", () => {
  // your code here
  class TaskList {
    constructor() {
      this.tasks = [];
    }
  
    createNewTask(description) {
      if (description.trim() === "") return; // Prevent empty tasks
      this.tasks.push(description);
    }
  
    deleteTask(description) {
      this.tasks = this.tasks.filter(task => task !== description);
    }
  
    renderTasks() {
      taskUl.innerHTML = ""; // Clear previous tasks
      this.tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.dataset.description = task;
  
        li.appendChild(deleteBtn);
        taskUl.appendChild(li);
      });
    }
  }
  
  const taskList = new TaskList();
  
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  
  const taskUl = document.getElementById("tasks");
  
  const renderApp = () => taskList.renderTasks();
  
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    
    e.target.reset();
    renderApp();
  });
  
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
