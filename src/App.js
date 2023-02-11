import db from './firebase';
import './App.css';
import AddTodo from './AddTodo';
import AllTodos from './AllTodos';

function App() {
  console.log(db);
  return (
    <>
    <h1>My To Do List</h1>
      <AddTodo />
      <AllTodos />
      </>
  );
}

export default App;
