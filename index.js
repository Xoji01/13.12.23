let container = document.createElement('div');
container.style.textAlign = 'center'


let heading = document.createElement('h1');
heading.textContent = 'Todo List';


let taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.placeholder = 'Введите новую задачу';

let addButton = document.createElement('button');
addButton.textContent = 'Добавить задачу';
addButton.classList.add('as')


let todoList = document.createElement('div');
todoList.classList.add('tododo')


function addTask() {
  let taskText = taskInput.value;
  if (taskText) {
    let taskItem = document.createElement('li');
    
    
    let timeElement = document.createElement('span');
    timeElement.textContent = new Date().toLocaleTimeString();
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '⊗';
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(taskItem);
    });
    deleteButton.classList.add('iks')

    taskItem.textContent = `${taskText} -` ;
    taskItem.appendChild(timeElement);
    taskItem.appendChild(deleteButton);

    todoList.appendChild(taskItem);
    taskInput.value = ''; 
  }
}


addButton.addEventListener('click', addTask);


container.appendChild(heading);
container.appendChild(taskInput);
container.appendChild(addButton);
container.appendChild(todoList);

document.body.appendChild(container);