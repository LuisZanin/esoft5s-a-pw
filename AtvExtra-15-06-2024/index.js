const taskKey = '@tasks'

const inputSearch = document.querySelector("#searche");

inputSearch.addEventListener("input", function () {
  const str = this.value.trim();
  if (str) {
    filterData(str);
  } else {
    showAllItems();
  }
});

function filterData(str) {
  showAllItems(); 

  const taskItems = document.querySelectorAll('#taskList li');

  taskItems.forEach((taskItem) => {
    const taskTitle = taskItem.querySelector('h2').textContent.toLocaleUpperCase();
    const searchTerm = str.toLocaleUpperCase(); 
    if (taskTitle.includes(searchTerm)) {
      taskItem.style.display = "block";
      taskItem.style.display = "none";
    }
  });
}

function showAllItems() {
  const taskItems = document.querySelectorAll('#taskList li');
  taskItems.forEach(taskItem => taskItem.style.display = "block");
}

function addTask(event) {
  event.preventDefault()
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const li = document.createElement('li')

  li.id = `id-${taskId}`
  li.innerHTML = `
    <div class="texto">
      <h2 id='h2-${taskId}'>${taskTitle}</h2>
      <p id='p-${taskId}'>${taskDescription}</p>
    </div>
    <div class="botao">
      <button title="Editar tarefa" onClick="openEditDialog(${taskId})">✏️</button>
      <button title="Excluir tarefa" onClick="removeTask(event, ${taskId})">❌</button>
    </div>
  `

  taskList.appendChild(li)

  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({
    id: taskId,
    title: taskTitle,
    description: taskDescription,
  })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

function openEditDialog(taskId) {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []

  selectedTaskId = tasks.findIndex((task) => task.id === taskId)
  const task = tasks[selectedTaskId]

  const dialog = document.querySelector('dialog')

  const editTitle = document.querySelector('#editTaskForm #title')
  const editDescription = document.querySelector('#editTaskForm #description')

  editTitle.value = task.title
  editDescription.value = task.description

  id = taskId

  dialog.showModal()
}

function closeDialog() {
  const dialog = document.querySelector('dialog')
  dialog.close()
}

window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')

  taskList.innerHTML = tasks
    .map(
      (task) => `
      <li id='id-${task.id}'>
        <div class="texto">
          <h2 id='h2-${task.id}'>${task.title}</h2>
          <p id='p-${task.id}'>${task.description}</p>
        </div>
        <div class="botao">
          <button title="Editar tarefa" onClick="openEditDialog(${task.id})">✏️</button>
          <button title="Excluir tarefa" onClick="removeTask(event, ${task.id})">❌</button>
        </div>
      </li>
    `
    )
    .join('')
})

function editTask(event){
  event.preventDefault()
  const dialog = document.querySelector('dialog')

  const form = document.querySelector('#editTaskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const i = tasks.findIndex((task) => task.id === id)
  tasks[i] = {
    id: id,
    title: taskTitle,
    description: taskDescription,
  }

  localStorage.setItem(taskKey, JSON.stringify(tasks))

  const h2 = document.querySelector(`#h2-${id}`) 
  const p = document.querySelector(`#p-${id}`)

  h2.textContent = taskTitle
  p.textContent = taskDescription

  dialog.close()
}

function removeTask(event, taskId){
  event.preventDefault()
  const taskList = document.querySelector('#taskList')

  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const i = tasks.findIndex((task) => task.id === taskId)

  tasks.splice(i, 1)
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  const li = document.querySelector(`#id-${taskId}`)
  taskList.removeChild(li)

}