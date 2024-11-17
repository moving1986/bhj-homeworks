const taskForm = document.querySelector(".tasks__control");
const task = taskForm.querySelector(".tasks__input");
const taskList = document.querySelector("#tasks__list");
const removeTask = document.querySelector(".task__remove");

function addTask(event) {
  event.preventDefault();
  if (task.value) {
    taskList.insertAdjacentHTML(
      "afterBegin",
      `
           <div class="task">
           <div class="task__title">
           ${task.value}
           </div>
           <a href="#" class="task__remove">&times;</a>
         </div>
        `
    );
  }
  task.value = '';
}

function deleteTask(event) {
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();        
    }
}


taskForm.addEventListener("submit",addTask);
taskList.addEventListener('click', deleteTask);