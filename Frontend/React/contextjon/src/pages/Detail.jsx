import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextData } from "../context/Context";

export const Detail = () => {
  const { id } = useParams();
  const { data } = useContext(ContextData);
  const user = data[id];
  return (
    <section className="h-[91.9vh] bg-orange-950">
      <div className="container h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl">{user.name}</h1>
        <h1 className="text-white text-3xl">{user.surname}</h1>
        <h1 className="text-white text-3xl">{user.email}</h1>
        <h1 className="text-white text-3xl">{user.phone}</h1>
        <img src={user.img} width={"300px"} alt="" />
        <Link to={`/form/${id}`} className="text-4xl text-white bg-green-600">
          Edit
        </Link>
      </div>
    </section>
  );
};
