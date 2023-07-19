import React, { useEffect, useState } from "react";
import { apiClient } from "../apiConfig/apiClient";

export default function useData(endpoint) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get(endpoint, { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}
