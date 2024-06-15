import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext"; 
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";

export const Product = ({ product }) => {
  const { favoriteIds, toggleFavorite } = useContext(DataContext);

  const isFavorited = favoriteIds.includes(product.id);

  return (
    <li className="product-list">
      <Link to={`/product/${product.id}`}>
        <div className="product">
          <div className="product-image-container">
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
            <div
              className="product-image-favorite-container"
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                toggleFavorite(product.id);
              }}
            >
              {isFavorited ? (
                <img
                  className="icon-favourite"
                  src={heartSolid}
                  alt="Favorited"
                />
              ) : (
                <img
                  className="icon-favourite"
                  src={heartRegular}
                  alt="Not Favorited"
                />
              )}
            </div>
          </div>
          <span className="product-title">{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default Product;
