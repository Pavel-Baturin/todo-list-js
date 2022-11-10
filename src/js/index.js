import { inputRef, buttonRef, listRef } from './refs.js';

listRef.addEventListener('click', onListClick);
buttonRef.addEventListener('click', handlerClick);

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  createMarkup();
}

function onListClick(e) {
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
    return;
  }
  saveData(value);
  createMarkup();
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
    return;
  }
  const markup = todoList
    .map(
      toDo =>
        `<li id="${toDo.id}" class="item ${toDo.checked ? 'checked' : ''}">${
          toDo.value
        } <button class="close">Delete</button></li>`
    )
    .join('');

  listRef.innerHTML = markup;
}
