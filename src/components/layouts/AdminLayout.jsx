import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AdminLayout() {
  return (
    <>
        <Header />
        <main className="flex w-full px-[5%]">
          <SideBar/>
          <div className="p-[5%] w-full">
           <Outlet />
          </div>
        </main>
    </>
  );
}
