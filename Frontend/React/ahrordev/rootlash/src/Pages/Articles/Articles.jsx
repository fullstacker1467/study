import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

export const Articles = () => {
  const [url, setUrl] = useState("http://localhost:3000/articles");
  const { data: articles, isPending, error } = useFetch(url);

  return (
    <div className="article-container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {articles &&
        articles.map((item, index) => (
          <div key={index} className="card">
            <h3>Title: {item.title}</h3>
            <p>
              Author: <i>{item.author}</i>
            </p>
            <NavLink to={`/articles/${item.id}`}>Read More</NavLink>
          </div>
        ))}
    </div>
  );
};
