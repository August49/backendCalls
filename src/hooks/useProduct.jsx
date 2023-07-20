// useProduct.js
import { useData } from "./useData";
import { useState } from "react";

export const useProduct = () => {
  const endpoint = "/products";
  const { data, deleteProduct, error, isLoading } = useData(endpoint);

  const handleDelete = (item) => {
    deleteProduct(item.id);
  };

  const handleUpdate = (item) => {
    console.log(item);
  };

  const handleAdd = (item) => {
    console.log(item);
  };

  return { data, error, isLoading, handleDelete, handleUpdate, handleAdd };
};
