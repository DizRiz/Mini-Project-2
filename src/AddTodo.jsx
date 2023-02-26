import React from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

function AddTodo({ todo, setTodo }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      setTodo("");
      console.log("Document written with ID", docRef.id);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddTodo;
