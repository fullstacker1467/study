import { PencilSimpleLine, Trash, UserCirclePlus } from "@phosphor-icons/react";
import React, { useContext } from "react";
import { ContextData } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { data, getLocal, setLocal } = useContext(ContextData);
  const navigate = useNavigate();
  function delUser(user) {
    let users = data.filter((item) => item.id !== user.id);
    setLocal(users);
    getLocal();
  }
  return (
    <section>
      <div className="container py-20">
        <ul className="flex justify-between border-2 border-sky-800 p-2">
          <li>№</li>
          <li>Name</li>
          <li>Surname</li>
          <li>Email Address</li>
          <li>Phone number</li>
          <li>Actions</li>
          <button
            onClick={() => navigate("/form")}
            className="flex items-center gap-2"
          >
            Add User <UserCirclePlus />
          </button>
        </ul>
        {data.map((user, index) => (
          <ul
            key={index}
            className="flex justify-between items-center border-2 border-sky-800 p-2 my-2"
          >
            <li>{index + 1}</li>
            <li>{user.name}</li>
            <li>{user.surname}</li>
            <li>{user.email}</li>
            <li>+998 {user.phone}</li>
            <li onClick={() => navigate(`/${user.id}`)}>Korish</li>
            <li className="flex items-center">
              {" "}
              <Link
                to={`/form/${user.id}`}
                className="flex items-center gap-2 text-white bg-green-600 py-2 px-3 rounded-s-lg"
              >
                Edit <PencilSimpleLine />
              </Link>
              <button
                onClick={() => delUser(user)}
                className="flex items-center gap-2 text-white bg-red-500 py-2 px-3 rounded-r-lg"
              >
                Delete <Trash />
              </button>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};
