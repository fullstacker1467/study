import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Deta = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/data/${id}`);
      if (!res.ok) {
        throw new Error(`Bu foydalanuvchi topilmadi: ${res.status}`);
      }
      const data = await res.json();
      setItem(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
          <Link to={"/"}>Back</Link>
        </>
      )}
    </>
  );
};
