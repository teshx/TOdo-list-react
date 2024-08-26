import React from "react";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");
  const geneerated = () => {
    return Math.floor(Math.random() * 10000);
  };

  const Handelsubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: geneerated(),
      })
    );
    setinput("");
  };
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="txt"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={Handelsubmit}>Submit</button>

      <ul className="todolist">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
