import React from "react";

export default function Table(data) {
  return (
    <>
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
