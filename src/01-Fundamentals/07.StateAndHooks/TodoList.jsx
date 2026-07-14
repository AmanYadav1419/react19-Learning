import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputValue] = useState("");

  const handleTodoFormSubmit = (event) => {
    event.preventDefault();

    if (inputvalue.trim()) {
      setTodos([...todos, inputvalue]);
      setInputValue("");
    }
  };

  const handleTodoInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List ✅💻</h1>
      <form onSubmit={handleTodoFormSubmit}>
        <input
          type="text"
          value={inputvalue}
          onChange={handleTodoInputChange}
          placeholder="Add a new Todo"
        />

        {/* this button allows us to submit the form */}
        <button type="sumbit">Add Todo</button>
      </form>

      {/* now we have to render the todos */}
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
