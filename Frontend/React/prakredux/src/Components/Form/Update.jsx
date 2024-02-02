import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, setLocal } from "../../Reducer/Reducer";

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.filter((i) => i.id == id);
  const { name, email } = user[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sub = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: id, name: uname, email: uemail }));
    dispatch(setLocal());
    navigate("/");
  };
  return (
    <div className="h-[70vh] flex justify-center items-center container">
      <form onSubmit={sub} className="flex flex-col w-1/3 gap-2">
        <h1 className="text-3xl text-center text-slate-700">Update Account</h1>
        <input
          className="bg-slate-100 p-2 outline-blue-400 border"
          type="text"
          placeholder="Enter Your UserName"
          value={uname}
          autoFocus={"on"}
          onChange={(e) => {
            setUname(e.target.value);
          }}
        />
        <input
          className="bg-slate-100 p-2 outline-blue-400 border"
          type="text"
          placeholder="Enter Your UserEmail"
          value={uemail}
          onChange={(e) => {
            setUemail(e.target.value);
          }}
        />
        <button className="p-2 bg-blue-400 text-white">Edit</button>
      </form>
    </div>
  );
};
