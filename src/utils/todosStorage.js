// Read saved todos from localStorage on app startup
export function getInitialTodos() {
  const saved = localStorage.getItem("todos");

  // Parse stored JSON or return an empty array if nothing is saved
  return saved ? JSON.parse(saved) : [];
}

// Save the current todos state to localStorage
export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
