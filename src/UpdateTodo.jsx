import React from "react";
import { updateDoc, doc } from "firebase/firestore";
import db from "./firebase";
import { useCollection } from "./hooks/useCollection";

function UpdateTodo() {
  const { documents: todos } = useCollection("todos");

  const handleChecked = async (id) => {
    const taskRef = doc(db, "todos", id);
    try {
      await updateDoc(taskRef, {
        completed: true
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {todos?.map((todo) => (
        <ul>
          <p>
            {todo.todo}{" "}
            <input              
              onChange={() => handleChecked(todo.id)}
              type="checkbox" />
          </p>
        </ul>
      ))}
    </div>
  );
}

export default UpdateTodo;
