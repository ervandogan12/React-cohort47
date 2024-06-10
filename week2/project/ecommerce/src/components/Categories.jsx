import React, { useState } from "react";
import { useEffect } from "react";
import { AllProducts } from "./Products";
import '../App.css';

export const AllCategories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryState, setCategoryState] = useState(undefined);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
 
  };

  const fetchProducts = async (category) => {
    try {
      setIsLoading(true);
      const response = await fetch(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
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
