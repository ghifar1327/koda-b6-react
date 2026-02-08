import { Outlet } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function AdminLayout() {
  return (
    <>
        <Header />
        <main className="flex w-full">
          <SideMenu/>
          <Outlet />
        </main>
    </>
  );
}
