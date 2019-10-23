import React, { useState } from "react";
import ToDoItem from "../TodoItem";
import "./index";

const ToDo = props => {
  const { list, redux_add, redux_delete } = props;
  const [todo, setTodo] = useState("");

  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map(t => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    if (!todo) {
      return alert("Please enter a todo!");
    }
    const newId = generateId();
    redux_add({ id: newId, text: todo });
    setTodo("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = e => {
    setTodo(e.target.value);
  };

  return (
    <div className="todo">
      <h1 className="todo-header">Redux ToDo</h1>
      <div className="todo-container">
        <div className="todo-content">
          {list &&
            list.map(item => {
              return (
                <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />
              );
            })}
        </div>

        <div className="todo-input">
          <input
            type="text"
            value={todo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className="todo-add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
