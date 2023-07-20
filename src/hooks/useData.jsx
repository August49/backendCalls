import { useEffect, useState } from "react";
import { apiClient } from "../apiConfig/apiClient";

export const useData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (signal) => {
    setIsLoading(true);
    apiClient
      .get(endpoint, { signal: signal })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.products);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const deleteProduct = (productId) => {
    const originalProduct = [...data];

    setData((prevData) =>
      prevData.filter((product) => product.id !== productId)
    );

    apiClient
      .delete(`/products/${productId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        setData(originalProduct);
        setError(error);
      });
  };
  const updateProduct = (product) => {
    const originalProduct = [...data];

    setData((prevData) =>
      prevData.filter((product) => product.id == productId)
    );

    apiClient
      .delete(`/products/${productId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        setData(originalProduct);
        setError(error);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading, deleteProduct, updateProduct };
};
