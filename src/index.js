document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("#new-task-description");
    const task = input.value;
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);

    form.reset();
  });

});
