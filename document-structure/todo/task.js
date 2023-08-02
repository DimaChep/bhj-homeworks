const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksAdd.addEventListener("click", (e) => {
  if (!taskInput.value.trim()) {
    return;
  }
  const taskRemove = document.querySelectorAll(".task__remove");
  taskRemove.forEach((i) => {
    i.addEventListener("click", () => {
      i.closest(".task").remove();
    });
  });

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `<div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a>`;
  tasksList.appendChild(task);
  taskInput.value = "";
  e.preventDefault();
});
