
export const Product = ({ product }) => (
    <li className="product-list">
        <div className="products">
            <img className="product-img" src={product.image} alt={product.title} />
            <span className="product-title">{product.title}</span>
        </div>
    </li>
    
);