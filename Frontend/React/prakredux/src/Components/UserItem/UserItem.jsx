import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, setLocal } from "../../Reducer/Reducer";

export const UserItem = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const delUser = (id) => {
    dispatch(deleteUser({ id }));
    dispatch(setLocal());
  };
  console.log(users);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5">
      {users &&
        users.map((item, index) => (
          <div
            key={index}
            className="flex border-2 border-black p-2 justify-between items-center  rounded-md"
          >
            <div className="title">
              <h1>{item.name}</h1>
              <h1>{item.email}</h1>
            </div>
            <div className="action flex gap-2">
              <Link
                to={`/form/${item.id}`}
                className="py-1 px-3 rounded-md bg-green-500 text-white"
              >
                <i className="fa-solid fa-user-pen"></i>
              </Link>
              <button
                onClick={() => delUser(item.id)}
                className="py-1 px-3 rounded-md bg-red-500 text-white"
              >
                <i className="fa-solid fa-user-large-slash"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
