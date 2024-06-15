// src/routes/Routes.jsx or a similar path
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../src/components/ProductDetail';
import { AllCategories } from '../src/components/Categories';
import Favourites from '../src/components/Favourites';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><h1>Products</h1><AllCategories /></>} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};

export default AppRoutes;