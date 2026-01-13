import { useTodosStore } from "../stores/useTodosStore";
import { formatDate } from "../utils/formatDate";
import {
  List,
  Item,
  TodoButton,
  RemoveButton,
  Paragraf,
} from "../styles/TodoList.styles";

export function TodoList() {
  // Read state + actions from the global Zustand store (no prop drilling)
  const todos = useTodosStore((state) => state.todos);
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const removeTodo = useTodosStore((state) => state.removeTodo);

  // Empty state UX when there are no tasks
  if (todos.length === 0) {
    return <Paragraf>No tasks yet. Add your first one above.</Paragraf>;
  }

  return (
    <List>
      {todos.map((todo) => (
        <Item key={todo.id}>
          {/* Click the todo to toggle completed/uncompleted */}
          <TodoButton
            type="button"
            onClick={() => toggleTodo(todo.id)}
            aria-pressed={todo.completed}
          >
            <span>
              {todo.completed ? "✅ " : "⬜ "} {todo.title}
            </span>
            {/* Show a formatted creation date */}
            <small>Skapad: {formatDate(todo.createdAt)}</small>
          </TodoButton>

          {/* Separate remove action with an accessible label */}
          <RemoveButton
            type="button"
            aria-label={`Remove ${todo.title}`}
            onClick={() => removeTodo(todo.id)}
          >
            ✕ Remove
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
}
