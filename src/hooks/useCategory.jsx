import { useData } from "./useData";

export const useCategory = () => {
  const endpoint = "/categories";
  const { data, error, isLoading } = useData(endpoint);

  const handleDelete = (item) => {
    deleteProduct(item.id);
  };

  const handleUpdate = (item) => {
    console.log(item);
    updateProduct(item);
  };

  const handleAdd = (item) => {
    console.log(item);
  };

  return { data, error, isLoading };
};
