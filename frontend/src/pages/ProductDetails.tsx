import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data.product));
  }, [id]);

  const handleCheckout = async () => {
    const res = await api.post("/orders/checkout", {
      productId: id,
      quantity: 1,
    });

    window.location.href = res.data.url;
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <button disabled={product.stock === 0} onClick={handleCheckout}>
        {product.stock === 0 ? "Out of Stock" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductDetails;