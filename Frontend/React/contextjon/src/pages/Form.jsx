import React, { useContext, useState } from "react";
import { ContextData } from "../context/Context";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const { data, getLocal, setLocal } = useContext(ContextData);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  function addUser(e) {
    e.preventDefault();
    if (
      name.length > 0 &&
      surname.length > 0 &&
      email.length > 0 &&
      phone.length > 0
    ) {
      let newData = [
        ...data,
        { id: data.length, name, surname, email, phone, img },
      ];
      setLocal(newData);
      getLocal();
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setImg("");
      navigate("/");
    } else {
      alert("Ishlamadi");
    }
  }
  return (
    <section className="h-[91.9vh] bg-slate-800">
      <div className="container h-full flex justify-center items-center">
        <form
          onSubmit={addUser}
          className="w-full md:w-1/2 flex flex-col gap-3"
        >
          <h1 className="text-3xl text-center text-white">ADD USER</h1>
          <input
            className="p-2 outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name: 'John Doe'"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            placeholder="Surname: 'Johnson'"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email: Hello@gmail.com"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            placeholder="95 123-45-67"
          />
          <input
            type="file"
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
          />
          <button className="bg-blue-500 py-2 text-xl text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
