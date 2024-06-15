import React from "react";
import { Product } from "./Product";

export const AllProducts = ({ products }) => {


  return (
    <ul className="products">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </ul>
  );
};

export default AllProducts;
