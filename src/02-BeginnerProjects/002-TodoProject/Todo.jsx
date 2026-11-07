// 002 Todo Project.
import { useState } from "react";
import "./todo.css";

const Todo = () => {
  // two states for the todo application.
  // one is for todos and second one is for inputs
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (!input) {
      alert("Please enter a todo");
      return;
    }
    setTodos((todos) => {
      // we are using concat method to combine the array , and passing the input as text and
      // giving some random unique id to prevent duplication of id issue.
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h2>My To-Do List</h2>
        <div className="todo-input-row">
          <input
            type="text"
            placeholder="Enter your todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="todo-input"
          />
          <button onClick={handleAddTodo} className="todo-add-btn">Add</button>
        </div>

        {/* to render all the todos  */}
        {todos.length === 0 ? (
          <p className="todo-empty">No todos yet. Add one above!</p>
        ) : (
          <ul className="todo-list">
            {todos.map(({ text, id }) => (
              <li key={id} className="todo-item">
                <span>{text}</span>
                <button onClick={() => removeTodo(id)} className="todo-delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
