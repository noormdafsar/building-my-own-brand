import { useEffect, useState } from "react";
import { getOrders } from "../api/order.api";
import Loader from "../components/common/Loader";

const Orders = () => {
  const [orders, setOrders] = useState<any>(null);

  useEffect(() => {
    getOrders().then((res) => setOrders(res.data.orders));
  }, []);

  if (!orders) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">My Orders</h2>
      {orders.map((o: any) => (
        <div key={o._id} className="border p-4 mb-2">
          <p>Total: ${o.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;