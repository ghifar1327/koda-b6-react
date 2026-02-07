import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function NotFoundPage() {
    const {user}= useContext(AuthContext)
  return (
    <div>
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to={`${user?.role == "admin"? "/admin" :"/"}`}>Kembali ke Home</Link>
    </div>
  );
}