import { useEffect, useState } from "react";
import { getProducts } from "../api/product.api";
import ProductCard from "../components/product/ProductCard";
import type { Product } from "../types/product.types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Products;