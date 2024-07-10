import React, { useState, useEffect } from "react";
import { AllProducts } from "./Products";
import '../App.css';

export const AllCategories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true); 
  const [isLoadingCategories, setIsLoadingCategories] = useState(true); 
  const [categoryState, setCategoryState] = useState(undefined);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchProducts = async (category) => {
    try {
      const response = await fetch(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(categoryState);
  }, [categoryState]);

  const handleCategoryClick = (clickedCategory) => {
    if (categoryState === clickedCategory) {
      setCategoryState(undefined);
    } else {
      setCategoryState(clickedCategory);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {isLoadingCategories ? <p>Loading Categories...</p> : (
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
      <div>
        {isLoadingProducts ? <p>Loading Products...</p> : <AllProducts products={products} />}
      </div>
    </>
  );
};