"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  return (
    <>
      <h1>{count}</h1>
      <h2>{val}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        className="bg-green-500"
      />
    </>
  );
}
