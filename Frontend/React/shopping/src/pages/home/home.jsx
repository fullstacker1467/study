import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Home = () => {
  const [url, setUrl] = useState("http://localhost:3000/data");
  const { data, loading, error } = useFetch(url);
  return (
    <>
      <section>
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
        <div className="container grid grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div key={index} className="p-3">
              <figure>
                <img src={item.img} alt="" />
              </figure>
              <div className="flex items-center justify-between">
                <div className="title">
                  <h3>{item.title}</h3>
                  <p>{item.price} Сум</p>
                </div>
                <Link to={`/${item.id}`} className="bg-red-400">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
