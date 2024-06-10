import React, { useState, useEffect } from 'react';
import {Product} from './Product'

export const AllProducts = ({products}) => {

  return (
   
    <ul className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};