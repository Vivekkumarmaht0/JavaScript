const todoList = [];

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = `<p>${todoList[i]}</p>`;
    todoListHTML += todo;
  }
//   console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const input = inputElement.value;
  todoList.push(input);
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}

