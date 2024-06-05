import {Product} from '../single_product'

export const AllProducts = ({ products }) => (
    <ul className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );