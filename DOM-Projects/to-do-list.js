const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i = i + 1;
}
