import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodoSlicer";

export const InputField = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: new Date().getTime(),
              text,
              completed: false,
            })
          );
          setText("");
        }}
      >
        Add todo
      </button>
    </label>
  );
};
