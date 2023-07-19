import useData from "./useData";

export const useProduct = () => {
  const endpoint = "/products";
  return useData(endpoint);
};
