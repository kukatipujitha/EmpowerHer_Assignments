const API_URL = "https://jsonplaceholder.typicode.com/todos";
const STORAGE_KEY = "myTodos";
const container = document.getElementById("todo-container");

// STEP 1: Fetch todos and store only first 20
async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const first20 = data.slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(first20));

    renderTodos(first20);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// STEP 2: Render todos on screen
function renderTodos(todos) {
  container.innerHTML = ""; // clear UI

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <p><strong>Title:</strong> ${todo.title}</p>
      <p><strong>Completed:</strong> ${todo.completed}</p>
      <button onclick="deleteTodo(${todo.id})">Delete</button>
    `;

    container.appendChild(div);
  });
}

// STEP 3: Delete todo without page refresh
function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // remove one item
  todos = todos.filter(todo => todo.id !== id);

  // update Local Storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

  // re-render UI
  renderTodos(todos);
}

// STEP 4: On page load → show stored todos or fetch new ones
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saved && saved.length > 0) {
    renderTodos(saved);
  } else {
    fetchTodos();
  }
};
