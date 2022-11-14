import { inputRef, addButtonRef, listRef } from './refs.js';

listRef.addEventListener('click', onListClick);
addButtonRef.addEventListener('click', handlerClick);

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  createMarkup();
}

function onListClick(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.addEventListener('click', onDeleteButtonClick);
    const currentElIdx = Number(e.target.getAttribute('idx'));
    onDeleteButtonClick(currentElIdx);
  }

  if (e.target.tagName !== 'LI') {
    return;
  }

  const currentElId = Number(e.target.getAttribute('id'));
  todoList.map(todo => {
    if (currentElId === todo.id) {
      todo.checked = !todo.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
      createMarkup();
    }
  });
}

function handlerClick() {
  const value = inputRef.value.trim();
  if (!value) {
    alert('Поле не повинно бути пустим');
    return;
  }
  
  const uniqueTodo = todoList.map(todo => todo.value).includes(value);
  
  if (uniqueTodo) {
    return alert('Такий запис вже існує');
  }
  saveData(value);
  createMarkup();
  inputRef.value = '';
}

function saveData(value) {
  const time = Date.now();
  const newToDo = {
    value,
    checked: false,
    id: time,
  };
  todoList = [newToDo, ...todoList];
  localStorage.setItem('todo', JSON.stringify(todoList));
}

function createMarkup() {
  if (!todoList.length) {
    listRef.innerHTML = '';
    return;
  }
  listRef.innerHTML = todoList
    .map(
      toDo =>
        `<li id="${toDo.id}" class="item ${toDo.checked ? 'checked' : ''}">${
          toDo.value
        } <button idx="${toDo.id}" class="delete">Delete</button></li>`
    )
    .join('');
}

function onDeleteButtonClick(todoId) {
  const deleteToDo = todoList.filter(todo => todo.id !== todoId);
  todoList = deleteToDo;
  localStorage.setItem('todo', JSON.stringify(todoList));
  createMarkup();
}
