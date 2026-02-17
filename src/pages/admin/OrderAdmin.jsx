import { Button } from '../../components/common/Button'
import { Funnel, PenLine, Search, Trash2 } from 'lucide-react'
import useLocalStorage from '../../hooks/useLocalStotage'

export default function OrderAdmin() {
  const [users] =  useLocalStorage('users', null)
  const historyOreder =users.filter(item => item.role === "user").flatMap(item => item.history)
  console.log(historyOreder)
  return (
        <section className="p-[5%]">
            <h1 className="text-5xl">Order List</h1>
            <div className="flex justify-between items-end">
              <Button onClick={(e)=> {e.preventDefault()}} size="w-fit p-2 h-fit px-3" orange>+ Add Order</Button>
              <div className="flex gap-2 ">
                  <div className='w-fit'>
                      <p className="mb-2 text-gray-400">Status</p>
                      <div className='pr-3 rounded border border-gray-200'>
                      <select className="p-2.5  flex items-center w-70 outline-none">
                         <option value={"all"}>All</option>
                      </select>
                      </div>
                  </div>
                  <label htmlFor="" className="flex items-end gap-3">
                    <div>
                        <p className="mb-2 text-gray-400">search product</p>
                        <div className="p-2 px-3 rounded border border-gray-200 flex items-center w-fit">
                        <input className="outline-none"/><Search/>
                        </div>
                    </div>
                    <Button orange size="w-fit h-fit p-2 px-3"><Funnel/> Filter</Button>  
                  </label>
              </div>
            </div>

            {/* =================== Table */}
            <section className="w-full mt-5 border rounded-xl border-gray-500 p-3">
               <table className="w-full table-fixed">
                 <thead className='w-full'>
                     <tr className="text-gray-500 font-normal">
                     <th className="w-[10%] py-5">No. Order</th>
                     <th className="w-[15%] py-5">Date</th>
                     <th className="w-[15%] py-5">Order</th>
                     <th className="w-[10%] py-5">Status</th>
                     <th className="w-[20%] py-5">Total</th>
                     <th className="w-[10%] py-5">Action</th>
                     </tr>
                 </thead>
                 <tbody className="text-center">
                   {historyOreder.map((item, index) => (
                     <tr key={item.id} className={`${index %2 === 0 && "bg-gray-100"} text-gray-500`}>
                       <td className="py-4"> 
                         #{item.id}
                       </td>
                       <td className="py-4">{
                       new Date(item.create_at).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                          })}</td>
                       <td>
                          <ul className='w-full flex flex-col items-center'>
                            {item.orders.map(item => {
                              return <li className='list-disc w-fit'>{item.name}</li> 
                            })}
                          </ul>
                        </td>
                       <td className={`py-4 text-sm `}><p className={`${item.status == "On Progress" ? "bg-orange-200 text-orange-600" : item.status == "Pending"? "bg-red-200 text-red-600" : item.status == "Done"? "bg-green-200 text-green-600": "bg-gray-200 text-gray-600"} px-1 rounded-full`}></p>{item.status? item.status : "-" }</td>
                       <td className="py-4">IDR {item.total}</td>
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
