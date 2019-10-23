import React from "react";
import "./index";

const ToDoItem = props => {
  const { item, deleteItem } = props;

  return (
    <div className="todo-item">
      <p className="todo-item-text">{item.text}</p>
      <button className="todo-item-delete" onClick={() => deleteItem(item)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
