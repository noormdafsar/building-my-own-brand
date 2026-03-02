import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../api/product.api";
import Button from "../../components/common/Button";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({}).then((res) => setProducts(res.data.products));
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    setProducts(products.filter((p: any) => p._id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Manage Products</h2>
      {products.map((p: any) => (
        <div key={p._id} className="flex justify-between border p-3 mb-2">
          <span>{p.title}</span>
          <Button onClick={() => handleDelete(p._id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;