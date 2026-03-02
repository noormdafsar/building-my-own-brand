import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children, role }: any) => {
  const auth = useContext(AuthContext);

  if (!auth?.user) return <Navigate to="/login" />;
  if (role && auth.user.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;