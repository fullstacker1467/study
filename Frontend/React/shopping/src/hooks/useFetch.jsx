import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          setError(true);
        }
        const malumot = await res.json();
        setData(malumot);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};
