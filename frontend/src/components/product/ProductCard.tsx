import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => navigate(`/products/${product._id}`)}>
        View
      </button>
    </div>
  );
};

export default ProductCard;