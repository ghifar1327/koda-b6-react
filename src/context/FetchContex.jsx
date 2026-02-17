// import { createContext, useEffect, useState } from 'react'

// const FetchContext = createContext(null)

// export  function FetchProvider({children}) {
//     const [products , setProducts] = useState([])
    
//     useEffect(()=>{
//         (async()=>{
//             const res = await fetch("https://raw.githubusercontent.com/ghifar1327/koda-b6-react/refs/heads/main/products.json")
//             try{
//                 if(!res.ok) throw new Error()
//                 const data = await res.json()
//                 setProducts(data)
//             }catch(err){
//                 console.error(err)
//                 return
//             }
//         })()
//     },[])
//     return (
//     <FetchContext.Provider value={[products]}>
//         {children}
//     </FetchContext.Provider>
//   )
// }
// export default FetchContext