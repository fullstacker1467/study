import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, refreshReducer } from "../../Reducer/Reducer";
import getUID from "uid-generator-package";

export const FormJon = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: getUID(), name, email }));
    dispatch(refreshReducer());
    
    navigate("/");
  };
  return (
    <div className="h-[70vh] flex justify-center items-center container">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-2">
        <h1 className="text-3xl text-center text-slate-700">Create Account</h1>
        <input
          className="bg-slate-100 p-2 outline-blue-400 border"
          type="text"
          placeholder="Enter Your UserName"
          autoFocus={"on"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="bg-slate-100 p-2 outline-blue-400 border"
          type="text"
          placeholder="Enter Your UserEmail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="p-2 bg-blue-400 text-white">Submit</button>
      </form>
    </div>
  );
};
