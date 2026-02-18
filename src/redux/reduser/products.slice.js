import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    "fetchProducts",
    async () =>{
        const res = await fetch("https://raw.githubusercontent.com/ghifar1327/koda-b6-react/refs/heads/main/src/data/products.json")
    
        if(!res.ok) throw new Error("Failed to fetch products")
        
         return await res.json()   
    }

)

const productSlice = createSlice({
    name : "product",
    initialState : {
        products : [],
        loading : false,
        error : null,
    },
    reducers : {
        addProduct: (state, action) => {
            state.products.push({
            id: Date.now(),
            ...action.payload
            });
        },
        editProduct : (state , action)=>{
            const {id , updateData} = action.payload
            const index = state.products.findIndex( item => item.id === id)
            if (index !== -1){
                state.products[index] = {...state.products[index], ...updateData}
            }
        },
        
    
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchProducts.fulfilled, (stete, action)=>{
            stete.loading = false
            stete.products = action.payload
        })
        .addCase(fetchProducts.rejected, (stete, action)=>{
            stete.loading = false
            stete.error = action.error.message
        })

    }
})

export const {addProduct, editProduct, deleteProduct} = productSlice.actions
export default productSlice.reducer