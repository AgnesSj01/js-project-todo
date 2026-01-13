import { useTodosStore } from "../stores/useTodosStore";

export function TodoCount() {
  // Read todos from the global Zustand store
  const todos = useTodosStore((state) => state.todos);
  // Display the total number of tasks
  return <p>Number of tasks: {todos.length}</p>;
}
