import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { TodoCount } from "./components/TodoCount";
import { useTodosStore } from "./stores/useTodosStore";
import { AppWrapper, Header, BulkButton } from "./styles/App.styles";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  //Get only the action from the global Zustand store
  const completeAll = useTodosStore((state) => state.completeAll);
  return (
    <>
      {/*Global styles fpr the entire app */}
      <GlobalStyle />
      {/* Main app container */}
      <AppWrapper>
        <Header>
          {/* App title */}
          <h1>Todo App</h1>
        </Header>
        {/* Form to add new todos */}
        <TodoForm />
        {/* Displays total task */}
        <TodoCount />
        {/* Bulk action to toggle all todos */}
        <BulkButton type="button" onClick={completeAll}>
          Select all/deselect all{" "}
        </BulkButton>
        {/* List of all todos */}
        <TodoList />
      </AppWrapper>
    </>
  );
}
