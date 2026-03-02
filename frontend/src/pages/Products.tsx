import { useEffect, useState } from "react";
import { api } from "../api/axios";
import ProductCard from "../components/product/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/products?page=1&limit=10");
    setProducts(res.data.products);
  };

  return (
    <div>
      <h1>All Products</h1>
      <div className="grid">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;