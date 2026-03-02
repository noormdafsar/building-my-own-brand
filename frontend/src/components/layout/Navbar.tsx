import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-dark text-white px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">ShopSphere</Link>
      <div className="flex gap-4">
        <Link to="/products">Products</Link>
        {user ? (
          <>
            {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;