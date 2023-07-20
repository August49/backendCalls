import "./App.css";
import UpdateForm from "./components/updateForm";
import { useProduct } from "./hooks/useProduct";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Grid from "./components/Grid";

function App() {
  const { data, handleDelete, handleUpdate, handleAdd } = useProduct();
  const handleProductUpdate = (formData) => {
    handleUpdate(formData);
  };
  const handleNewProduct = (formData) => {
    handleAdd(formData);
  };

  return (
    <>
      <Grid />
    </>
  );
}

export default App;
