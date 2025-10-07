
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div>
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product border p-4 m-4 rounded-lg shadow-lg cursor-pointer transition-shadow duration-300">
        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700">{product.price}</p>
      </div>
    </Link>
  </div>
);

export default ProductCard;
