import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const ism = useRef(null);
  const yosh = useRef(null);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  function getUser(item) {
    data.map((elem) => (elem.id == item.id ? setCart([...cart, item]) : elem));
  }
  function delUser(item) {
    setCart(cart.filter((elem) => elem.id !== item.id));
  }
  function addUser(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/data", {
      id: data.length + 1,
      name: ism.current.value,
      age: yosh.current.value,
    });
    getData();
    ism.current.value = "";
    yosh.current.value = "";
  }
  return (
    <>
      <form
        onSubmit={addUser}
        className="flex flex-col w-1/2 mx-auto my-20 gap-2 justify-center items-center bg-blue-500 p-2"
      >
        <h1 className="text-3xl text-white">add user</h1>
        <input
          className="bg-slate-100 w-full border-2 p-2"
          type="text"
          placeholder="enter data"
          ref={ism}
        />
        <input
          className="bg-slate-100 w-full border-2 p-2"
          type="text"
          placeholder="enter data"
          ref={yosh}
        />
        <button className=" w-full text-white bg-slate-600 py-2">Submit</button>
      </form>
      <div className="grid grid-cols-3">
        {data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <button
              onClick={() => getUser(item)}
              className="bg-slate-500 text-white py-1 px-5"
            >
              Add
            </button>
            <Link to={`/${item.id}`}>Read More</Link>
          </div>
        ))}
      </div>
      {cart.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
          <button
            onClick={() => delUser(item)}
            className="bg-slate-500 text-white py-1 px-5"
          >
            Add
          </button>
          <Link to={`/${item.id}`}>Read More</Link>
        </div>
      ))}
    </>
  );
};
