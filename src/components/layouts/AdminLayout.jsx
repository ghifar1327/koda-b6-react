import { Outlet } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function AdminLayout() {
  return (
    <>
        <Header />
        <main className="flex w-full px-[5%]">
          <SideMenu/>
          <div className="p-5 w-full">
           <Outlet />
          </div>
        </main>
    </>
  );
}
