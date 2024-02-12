import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../store/TodoSlicer";

export const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li style={{ background: item.completed ? "green" : "transparent" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch(toggleCompleted(item.id))}
      />
      <span>{item.text}</span>
      <span
        style={{ color: "red" }}
        onClick={() => dispatch(removeTodo(item.id))}
      >
        &times;
      </span>
    </li>
  );
};
