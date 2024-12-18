const fetch = require("node-fetch");

async function fetchTodo() {
  const url = "http://jsonplaceholder.typicode.com/todos/1";

  const response = await fetch(url);
  const todo = await response.json();
  console.loog(todo);
}
fetchTodo();
