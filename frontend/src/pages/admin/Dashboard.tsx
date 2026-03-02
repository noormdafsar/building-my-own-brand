import { useEffect, useState } from "react";
import { api } from "../../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.get("/admin/analytics").then((res) => setStats(res.data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h2>Total Revenue: ${stats.totalRevenue}</h2>
      <h2>Total Orders: {stats.totalOrders}</h2>
    </div>
  );
};

export default Dashboard;