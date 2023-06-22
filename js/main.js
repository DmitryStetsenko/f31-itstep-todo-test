const doc = document;

const 
  forms = doc.forms.addTodoForm,
  formsEls = forms.elements,
  addTodoInput = forms.addTodoInput,
  addTodoBtn = forms.addTodoBtn;

const todoListEl = doc.querySelector('.todo-list');

const todos = [
  {id: 1, body: 'todo 1', completed: false},
  {id: 2, body: 'todo 2', completed: false},
  {id: 3, body: 'todo 3', completed: false},
];

renderTodoList(todos);

addTodoBtn.onclick = function(e) {
  e.preventDefault();
  const text = addTodoInput.value.trim();
  const id = todos.length ? todos[todos.length - 1].id + 1 : 1

  if (!text) {
    addTodoInput.value = '';
    return;
  }

  todos.push(createTodoObj(text, id));
  console.log(todos);
  renderTodoList(todos);

  addTodoInput.value = '';
}


function renderTodoList(todoList) {
  const todoItemEls = todoList.map((todo, index) => `
    <li class="todo-item" data-id="${ todo.id }">
      <span class="todo-item__index">${ index + 1 }</span>
      <label class="todo-item__input">
        <input type="checkbox" name="completed">
      </label>
      <p class="todo-item__text">${ todo.body }</p>
      <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
      </div>
    </li>
  `).join('');
  
  todoListEl.innerHTML = todoItemEls;
}

function createTodoObj(text, id) {
  const todoObj = {
    id,
    body: text,
    completed: false
  }

  return todoObj;
}