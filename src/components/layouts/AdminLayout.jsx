import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AdminLayout() {
  return (
    <>
        <Header />
        <main className="flex w-full px-[5%] relative">
          <SideBar/>
          <div className="relative flex-1">
           <Outlet />
          </div>
        </main>
    </>
  );
}
