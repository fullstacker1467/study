import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const TripList = () => {
  const all = "http://localhost:3000/trips";
  const europe = "http://localhost:3000/trips?loc=Europe";
  const usa = "http://localhost:3000/trips?loc=USA";
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div>
      <h1>TripList</h1>
      <div>
        <button onClick={() => setUrl(all)}>All</button>
        <button onClick={() => setUrl(europe)}>Europe</button>
        <button onClick={() => setUrl(usa)}>USA</button>
      </div>
      <div>{isPending && "Loading..."}</div>
      <div>{error && error}</div>
      {trips &&
        trips.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
    </div>
  );
};
