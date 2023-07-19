import "./App.css";
import { useProduct } from "./hooks/useProduct";

function App() {
  const { data } = useProduct();

  return (
    <>
      <div className="min-vw-90 ">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th className="col">Title</th>
              <th className="col">Category</th>
              <th className="col">Stock</th>
              <th className="col">Brand</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
