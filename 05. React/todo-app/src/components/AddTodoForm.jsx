import { useState } from "react";

export default function AddTodoForm() {
  const [inputValue, setInputValue] = useState("");

  const [list, setList] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setList(localStorage.setItem("myList", list));

      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Add a todo item"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
