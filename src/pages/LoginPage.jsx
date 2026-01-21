import Login from "../components/login";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginPage() {
  return (
      <AuthLayout src={"/auth1.png"} alt={"login coffie"}>
        <Login />
      </AuthLayout>
  );
}
