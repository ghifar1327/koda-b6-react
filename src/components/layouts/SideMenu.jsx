import { Beaker, LayoutDashboard, LogOut, ShoppingBasket, Users } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function SideMenu() {
const location = useLocation()
    return (
    <aside className='w-[20%] pl-10 border-r-2 border-gray-300 min-h-screen p-5 flex flex-col gap-1'>
        <Link className={`${location.pathname == "/admin" ? "bg-primary text-black" : "text-gray-600"} p-2  flex gap-5 items-center text-xl rounded-xl`}><LayoutDashboard/> <p>Dasboard</p></Link>
        <Link className={`${location.pathname == "" ? "bg-primary text-black" : "text-gray-600"} p-2  flex gap-5 items-center text-xl rounded-xl`}><Beaker/> <p>Product</p></Link>
        <Link className={`${location.pathname == "" ? "bg-primary text-black" : "text-gray-600"} p-2  flex gap-5 items-center text-xl rounded-xl`}><ShoppingBasket/> <p>Order</p></Link>
        <Link className={`${location.pathname == "" ? "bg-primary text-black" : "text-gray-600"} p-2  flex gap-5 items-center text-xl rounded-xl`}><Users/> <p>User</p></Link>
        <Link className={`${location.pathname == "" ? "bg-primary text-black" : "text-gray-600"} p-2  flex gap-5 items-center text-xl rounded-xl`}><LogOut/> <p>Log Out</p></Link>
    </aside>
  )
}
