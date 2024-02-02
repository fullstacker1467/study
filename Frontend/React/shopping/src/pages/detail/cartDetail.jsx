import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const CartDetail = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/cart/${id}`;
  const { data: item, loading, error } = useFetch(url);
  return (
    <div className="h-screen">
      <div className="container">
        {loading && (
          <section className="flex items-center justify-center">
            <h1 className="text-blue-500 text-5xl">Mahsulot Yuklanmoqda</h1>
          </section>
        )}
        {error && (
          <section className="flex items-center justify-center">
            <h1 className="text-red-500 text-5xl">Mahsulot Topilmai</h1>
          </section>
        )}
        <div className="flex justify-center items-center">
          <img src={item.img} alt="" />
          <div className="right">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
