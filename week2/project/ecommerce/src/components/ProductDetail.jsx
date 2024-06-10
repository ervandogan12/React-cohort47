import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
        
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);
  if (error) {
    return <div>Error: {error}</div>;
  }


  return product ? (
    <div className="product-details-container">
      <div className="title-container">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="product-details-image">
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductDetail;
