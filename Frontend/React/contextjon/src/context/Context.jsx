import React, { createContext, useState } from "react";

export const ContextData = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || [
      {
        id: 0,
        name: "Nodirbek",
        surname: "Solijonov",
        email: "Hello@gmail.com",
        phone: 999999999,
        img: "",
      },
    ]
  );
  function getLocal() {
    let newData = JSON.parse(localStorage.getItem("users"));
    setData(newData);
  }
  function setLocal(data) {
    localStorage.setItem("users", JSON.stringify(data));
  }
  return (
    <ContextData.Provider value={{ data, setData, getLocal, setLocal }}>
      {children}
    </ContextData.Provider>
  );
};
