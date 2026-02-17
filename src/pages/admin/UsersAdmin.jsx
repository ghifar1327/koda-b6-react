import React from 'react'
import { Button } from '../../components/common/Button';
import { Funnel, PenLine, Search, Trash2 } from 'lucide-react';
import useLocalStorage from '../../hooks/useLocalStotage';

export default function UsersAdmin() {
  const [ users , _] = useLocalStorage("users", null)
  console.log(users)
  return (
    <section className="p-[5%]">
      <h1 className="text-5xl">User list</h1>
      <div className="flex justify-between items-end">
        <Button  size="w-fit p-2 h-fit px-3" orange>+ Add User</Button>
        <div className="flex gap-2 ">
            
            <label htmlFor="" className="flex items-end gap-3">
              <div>
                  <p className="mb-2 text-gray-400">search user</p>
                  <div className="p-2 px-3 rounded border border-gray-200 flex items-center w-fit">
                  <input className="outline-none"/><Search></Search>
                  </div>
              </div>
              <Button orange size="w-fit h-fit p-2 px-3"><Funnel/> Filter</Button>  
            </label>
        </div>
      </div>
      <section className="w-full mt-5 border rounded-xl border-gray-500 p-5">
        <table className="w-full table-fixed">
          <thead>
              <tr className="text-gray-500 font-normal">
              <th className="py-5">ID</th>
              <th className="py-5">Image</th>
              <th className="py-5">Full Name</th>
              <th className="py-5">Phone</th>
              <th className="py-5">Address</th>
              <th className="py-5">Email</th>
              <th className="py-5">Action</th>
              </tr>
          </thead>
          <tbody className="text-center">
            {users.map((item, index) => (
              <tr key={item.id} className={`${index %2 === 0 && "bg-gray-100"} text-gray-500`}>
                <td className="py-4">#{item.id}</td>
                <td className="py-4">
                  <img
                    src={item.image}
                    alt={item.FullName}
                    className="w-12 h-12 mx-auto object-cover rounded"
                  />
                </td>
                <td className="py-4">{item.fullName}</td>
                <td className="py-4">{item.phone}</td>
                <td className="py-4">{item.address}</td>
                <td className="py-4">{item.email}</td>
                <td className="py-4">
                  <div className="flex justify-center gap-2">
                    <button onClick={""} className="cursor-pointer w-8 h-8 bg-primary/30 text-primary flex items-center justify-center rounded-full">
                      <PenLine size={18} />
                    </button>
                    <button className="cursor-pointer w-8 h-8 bg-red-600/30 text-red-600 flex items-center justify-center rounded-full">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  )
}
