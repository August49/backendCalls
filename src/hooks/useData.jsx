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
        if (endpoint === "/") {
          setData(res.data.products);
        } else {
          setData(res.data);
        }
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
      .delete(`/${productId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        setData(originalProduct);
        setError(error);
      });
  };

  const updateProduct = (product) => {
    const updatedProduct = {
      id: product.productID,
      title: product.productName,
      brand: product.brandName,
      price: product.productPrice,
      stock: product.stock,
    };
    const index = data.findIndex((p) => p.id === parseInt(product.productID));
    console.log(index);

    if (index >= 0) {
      apiClient
        .put(`/${product.productID}`, updatedProduct)
        .then((res) => {
          const updatedData = [...data];
          updatedData[index] = res.data;

          setData(updatedData);

          console.log(updatedData);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      console.log("Product not found in the data array.");
    }
  };

  const addProduct = (product) => {
    const newProduct = {
      title: product.productName,
      brand: product.brandName,
      price: product.productPrice,
      stock: product.stock,
      category: product.category,
    };

    apiClient
      .post(`/add`, newProduct)
      .then((res) => {
        const updatedData = [res.data, ...data];

        setData(updatedData);

        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading, deleteProduct, updateProduct, addProduct };
};
