import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);
  console.log(user.role_id)

  if(!user){
    return <Navigate to="/" replace/>
  }
  
  if (role && user.role_id !== role) {
    return <Navigate to="/404" replace />;
  }

  return children ? children : <Outlet />;
}


export function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user?.role_id === 1) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
