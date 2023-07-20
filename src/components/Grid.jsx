import React from "react";
import { useProduct } from "../hooks/useProduct";
import Card from "./Card";

export default function Grid() {
  const { data } = useProduct();
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3">
        {data.map((product) => (
          <div className="col" key={product.id}>
            <Card
              title={product.title}
              image={product.thumbnail}
              text={product.description}
              buttonText={"Add Cart"}
            />
          </div>
        ))}
      </div>
    </>
  );
}
