import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/order.api";
import Loader from "../../components/common/Loader";

const Analytics = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAnalytics().then((res) => setData(res.data));
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sales Analytics</h2>
      <p>Total Revenue: ${data.totalRevenue}</p>
      <p>Total Orders: {data.totalOrders}</p>
    </div>
  );
};

export default Analytics;