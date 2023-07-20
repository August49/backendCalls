// useProduct.js
import { useData } from "./useData";

export const useProduct = () => {
  const endpoint = "/";
  const { data, error, isLoading, deleteProduct, updateProduct, addProduct } =
    useData(endpoint);

  const handleDelete = (item) => {
    deleteProduct(item.id);
  };

  const handleUpdate = (item) => {
    console.log(item);
    updateProduct(item);
  };

  const handleAdd = (item) => {
    console.log(item);
    addProduct(item);
  };

  return { data, error, isLoading, handleDelete, handleUpdate, handleAdd };
};
