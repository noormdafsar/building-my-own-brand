import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/product.api";
import { Product } from "../types/product.types";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProduct(id).then(res => setProduct(res.data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-10 flex gap-10">
      <img src={product.image} className="w-96" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-3">{product.description}</p>
        <p className="text-xl mt-3">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;