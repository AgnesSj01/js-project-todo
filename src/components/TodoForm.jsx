import { useState } from "react";
import { useTodosStore } from "../stores/useTodosStore";
import { Form, Input, Submit } from "../styles/TodoForm.styles";

export function TodoForm() {
  // Local state for the input value
  const [title, setTitle] = useState("");

  // Get the addTodo action from the global store
  const addTodo = useTodosStore((state) => state.addTodo);

  function handleSumbit(e) {
    // Prevent default form submission (page reload)
    e.preventDefault();

    // Add new todo using global state
    addTodo(title);

    // Clear the input after submit
    setTitle("");
  }

  return (
    <Form onSubmit={handleSumbit}>
      {/* Accessible label connected to the input */}
      <label htmlFor="TodoTitle"> New Task </label>

      {/* Controlled input field */}
      <Input
        id="TodoTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Submit button triggers form submit */}
      <Submit type="submit"> Add Task </Submit>
    </Form>
  );
}
