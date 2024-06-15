import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext"; 
import { useEffect } from "react";
import { AllProducts } from "./Products";
import '../App.css';

export const AllCategories = () => {
  const { products, categories, isLoading, categoryState, error, handleCategoryClick } = useContext(DataContext);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    isLoading ? <p>Loading...</p> :<>
      <div className="categories">
        {Array.isArray(categories) &&
          categories.map((category, index) => (
            <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={
              category === categoryState
                ? "category-item selected-category-item"
                : "category-item"
            }
            >
              {category}
            </div>
          ))}
      </div>
      <div>
        <AllProducts products={products} />
      </div>
    </>
  );
};
