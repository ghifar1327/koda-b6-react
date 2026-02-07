import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);

  if ((user.role !== role) || !user) {
    return <Navigate to="/404" replace />;
  }
  return children;
}

export function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return <Navigate to="/404" replace />;
  }

  return children;
}
