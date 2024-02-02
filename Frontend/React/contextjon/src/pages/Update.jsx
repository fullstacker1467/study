import React, { useContext, useState } from "react";
import { ContextData } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

export const Update = () => {
  const { data, getLocal, setLocal } = useContext(ContextData);
  const { id } = useParams();
  const [uname, setUname] = useState(data[id].name);
  const [usurname, setUsurname] = useState(data[id].surname);
  const [uemail, setUemail] = useState(data[id].email);
  const [uphone, setUphone] = useState(data[id].phone);
  const [uimg, setUimg] = useState(data[id].img);
  const navigate = useNavigate();
  function editUser(e) {
    e.preventDefault();
    if (
      uname.length > 0 ||
      usurname.length > 0 ||
      uemail.length > 0 ||
      uphone.length > 0
    ) {
      if (data.filter((u) => u.id === id)) {
        data[id].name = uname;
        data[id].surname = usurname;
        data[id].email = uemail;
        data[id].phone = uphone;
        data[id].img = uimg;
        setLocal(data);
        getLocal();
        navigate("/");
      }
    } else {
      alert("ishlamadi");
    }
  }
  return (
    <section className="h-[91.9vh] bg-slate-800">
      <div className="container h-full flex justify-center items-center">
        <form
          onSubmit={editUser}
          className="w-full md:w-1/2 flex flex-col gap-3"
        >
          <h1 className="text-3xl text-center text-white">EDIT USER</h1>
          <input
            className="p-2 outline-none"
            onChange={(e) => setUname(e.target.value)}
            value={uname}
            type="text"
            placeholder="Name: 'John Doe'"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setUsurname(e.target.value)}
            value={usurname}
            type="text"
            placeholder="Surname: 'Johnson'"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setUemail(e.target.value)}
            value={uemail}
            type="text"
            placeholder="Email: Hello@gmail.com"
          />
          <input
            className="p-2 outline-none"
            onChange={(e) => setUphone(e.target.value)}
            value={uphone}
            type="number"
            placeholder="95 123-45-67"
          />
          <input type="file" onChange={(e) => setUimg(e.target.files[0])} />
          <button className="bg-blue-500 py-2 text-xl text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
