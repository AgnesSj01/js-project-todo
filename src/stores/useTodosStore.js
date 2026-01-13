import { create } from "zustand";
import { getInitialTodos, saveTodos } from "../utils/todosStorage";

// Global todo store using Zustand
export const useTodosStore = create((set) => ({
  // Initial state loaded from local storage
  todos: getInitialTodos(),

  // Add a new todo item
  addTodo: (title) => {
    set((state) => {
      const newTodos = [
        ...state.todos,
        {
          id: Date.now().toString(), // simple unique id
          title,
          completed: false,
          createdAt: Date.now(),
        },
      ];

      // Persist updated todos
      saveTodos(newTodos);
      return { todos: newTodos };
    });
  },

  // Remove a todo by id
  removeTodo: (id) => {
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);

      // Persist updated todos
      saveTodos(newTodos);
      return { todos: newTodos };
    });
  },

  // Toggle all todos as completed / uncompleted
  completeAll: () => {
    set((state) => {
      const allCompleted = state.todos.every((todo) => todo.completed);
      const newTodos = state.todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }));

      // Persist updated todos
      saveTodos(newTodos);
      return { todos: newTodos };
    });
  },

  // Toggle completed state for a single todo
  toggleTodo: (id) => {
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      // Persist updated todos
      saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
}));
