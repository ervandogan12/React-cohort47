import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Product from "./Product";

function Favourites() {
  const { favoriteIds, products } = useContext(DataContext);

  const favorites = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <div>
      <h1>Favourites</h1>
      <ul className="products">
        {favorites.map((favorite) => {
          return <Product key={favorite.id} product={favorite} />;
        })}
      </ul>
    </div>
  );
}

export default Favourites;
