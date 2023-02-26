import React from "react";
import {deleteDoc, doc } from "firebase/firestore";
import db from "./firebase";
import { useCollection } from "./hooks/useCollection";

function DeleteTodo() {
    const { documents: todos } = useCollection('todos')
    console.log(todos)

    const handleClick = async (id) => {
        const ref = doc(db, 'todos', id)
        await deleteDoc(ref)
    }

    return (
    <div>
            {todos?.map(todo =>
                <ul>
                    <p>{todo.todo}</p>
                    <button key={todo.id} onClick={() => handleClick(todo.id)}>
                    Delete {todo.todo}
                </button></ul>
            )}
         </div>       
    )
}
export default DeleteTodo;