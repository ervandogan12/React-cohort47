import { useState } from 'react';
import products from './fake-data/all-products';
import categories from './fake-data/all-categories';
import { AllCategories } from './components/all_categories';
import { AllProducts } from './components/all_products';
import './App.css';

function App() {
  const [categoryState, setCategoryState] = useState();
  const categoryProducts = categoryState ? products.filter(product => product.category.includes(categoryState.split(':')[1].trim())) : products;

  return (
    <div className="ecommerce-aplication">
      <h1>Products</h1>
      <AllCategories categories={categories} setCategoryState={setCategoryState} categoryState={categoryState} />
      <AllProducts products={categoryProducts} />
    </div>
  );
}

export default App;

//https://main--ecommercehyf.netlify.app/