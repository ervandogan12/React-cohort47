import React, { useContext } from "react";
import { useData } from "../context/DataContext";
import { useFavorites } from '../context/FavoritesContext';
import Product from "./Product";

function Favourites() {
  const { products } = useData();
  const {favoriteIds} = useFavorites();

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
