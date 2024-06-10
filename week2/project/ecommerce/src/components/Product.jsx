import { Link } from 'react-router-dom';

export const Product = ({ product }) => {
  return(
    <li className="product-list">
      <Link to={`/product/${product.id}`} className="products">
        <img className="product-img" src={product.image} alt={product.title} />
        <span className="product-title">{product.title}</span>
      </Link>
    </li>
  );
};