// 002 Todo Project.
import { useState } from "react";
const Todo = () => {
  // two states for the todo application.
  // one is for todos and second one is for inputs
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();

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

  return (
    <div>
      <input
        type="text"
        placeholder="enter your todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      {/* to render all the todos  */}
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
