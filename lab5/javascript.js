const addTaskForm = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskNameInput = document.getElementById('task-name');
  const taskDescriptionInput = document.getElementById('task-description');

  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;

  if (taskName.length < 6 || taskDescription.length < 21) {
    alert('Tên lớn hơn 5 kí tự. Mô tả lớn hơn 20 kí tự.');
    return;
  }

  const taskListItem = document.createElement('li');
  const taskNameElement = document.createElement('h3');
  const taskDescriptionElement = document.createElement('p');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');

  taskNameElement.textContent = taskName;
  taskDescriptionElement.textContent = taskDescription;
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';

  deleteButton.addEventListener('click', function() {
    taskListItem.remove();
  });

  editButton.addEventListener('click', function() {
    
  });

  taskListItem.appendChild(taskNameElement);
  taskListItem.appendChild(taskDescriptionElement);
  taskListItem.appendChild(deleteButton);
  taskListItem.appendChild(editButton);

  taskList.appendChild(taskListItem);

  taskNameInput.value = '';
  taskDescriptionInput.value = '';
});
