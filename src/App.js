import React, { useState } from "react";
import AddTodo from "./AddTodo";
import AllTodos from "./AllTodos";
import DeleteTodo from "./DeleteTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");



  return (
    <>
      <h1>My To Do List</h1>
      <AddTodo todo={todo} setTodo={setTodo} />
      <AllTodos todos={todos} setTodos={setTodos} />
      <DeleteTodo />
    </>
  );
}

export default App;
