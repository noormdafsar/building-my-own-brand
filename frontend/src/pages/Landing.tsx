import { Link } from "react-router-dom";

const Landing = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4">Welcome to ShopSphere</h1>
    <Link to="/products" className="bg-primary text-white px-6 py-3 rounded">
      Explore Products
    </Link>
  </div>
);

export default Landing;