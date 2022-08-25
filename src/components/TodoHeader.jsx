import React, { useEffect, useRef, useState } from "react";

export default function TodoHeader({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div>
        <input
          id="new-task-input"
          value={input}
          ref={inputRef}
          onChange={(event) => setInput(event.target.value)}
          className="todo-input"
          style={{ width: "600px" }}
          placeholder="What do you have planned?"
        />
        <button id="new-task-submit" onClick={handleSubmit}>
          {edit ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
}
