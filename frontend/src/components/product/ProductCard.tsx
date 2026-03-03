import { Link } from "react-router-dom";
import { Product } from "../../types/product.types"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} className="h-48 w-full object-cover" />
      <h2 className="font-bold mt-2">{product.name}</h2>
      <p>₹ {product.price}</p>
      <Link to={`/product/${product._id}`}>
        <button className="bg-black text-white px-3 py-1 mt-2">
          View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;