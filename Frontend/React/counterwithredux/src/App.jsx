import { useState } from "react";
import { TodoList } from "./Components/TodoList";
import { InputField } from "./Components/InputField";

function App() {
  return (
    <>
      <InputField />
      <TodoList />
    </>
  );
}

export default App;
