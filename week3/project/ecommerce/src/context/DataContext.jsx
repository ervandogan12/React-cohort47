import React, { createContext, useContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteIds');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

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
    }finally{
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
    }finally{
      setIsLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(categoryState);
  }, [categoryState]);

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (productId) => {
    setFavoriteIds((currentFavorites) => {
      return currentFavorites.includes(productId) ? currentFavorites.filter(id => id !== productId) : [...currentFavorites, productId];
    });
  };

  const handleCategoryClick = (clickedCategory) => {
    setCategoryState(clickedCategory === categoryState ? undefined : clickedCategory);
  };

  return (
    <DataContext.Provider value={{favoriteIds, toggleFavorite, products, categories, isLoadingCategories,isLoadingProducts, categoryState, error, handleCategoryClick}}>
      {children}
    </DataContext.Provider>
  );
};