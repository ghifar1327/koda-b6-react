import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export function ProtectedRoute({ children, role }) {
  const { user, loading } = useContext(AuthContext);

  // optional tapi SANGAT disarankan
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/404" replace />;
  }

  return children ? children : <Outlet />;
}


export function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
