import React, {useContext } from "react";
import { DataContext } from "../context/DataContext"; 
import { AllProducts } from "./Products";
import '../App.css';

export const AllCategories = () => {
  const { products, categories, isLoadingCategories, categoryState, error, handleCategoryClick, isLoadingProducts } = useContext(DataContext);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {isLoadingCategories ? (
        <p>Loading...</p>
      ) : (
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
      )}

      {isLoadingProducts ? (
        <p>Loading...</p>
      ) : (
        <div>
          <AllProducts products={products} />
        </div>
      )}
    </>
  );
};