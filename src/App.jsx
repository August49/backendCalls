import "./App.css";
import UpdateForm from "./components/updateForm";
import { useProduct } from "./hooks/useProduct";
import { useState } from "react";
import AddProduct from "./components/AddProduct";

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
      <UpdateForm formData={(data) => handleProductUpdate(data)} />
      <AddProduct formData={(data) => handleNewProduct(data)} />
      <div className="min-vw-90">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col">Product Name</th>
              <th className="col">Category</th>
              <th className="col">Stock</th>
              <th className="col">Brand</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
