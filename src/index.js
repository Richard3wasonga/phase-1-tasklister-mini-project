document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const textbox = document.getElementById("create-task-form");
textbox.addEventListener("submit", (e) => {
	e.preventDefault();
	buildToDo(e.target.new_task_description.value);
});

function buildToDo(e_target_new_task_description_value) {
	const list = document.createElement("li");
	const button = document.createElement("button");

	list.textContent = `${e_target_new_task_description_value}  `;

	button.textContent = "x";

	const unordered_list = document.getElementById("tasks");

	unordered_list.appendChild(list);
	list.appendChild(button);

	button.addEventListener("click", deleteToDoItem);

	function deleteToDoItem(list) {
		return list.target.parentNode.remove();
	}
}
});
