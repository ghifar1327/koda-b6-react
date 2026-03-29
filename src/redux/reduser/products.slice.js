import { createSlice } from "@reduxjs/toolkit";


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
        deleteProduct : (state, action)=>{
            const id = action.payload
            state.products = state.products.filter(item => item.id !== id)
        }
    
    },
    // extraReducers: (builder)=>{
    //     builder
    //     .addCase(fetchProducts.pending, (state)=>{
    //         state.loading = true
    //     })
    //     .addCase(fetchProducts.fulfilled, (stete, action)=>{
    //         stete.loading = false
    //         stete.products = action.payload
    //     })
    //     .addCase(fetchProducts.rejected, (stete, action)=>{
    //         stete.loading = false
    //         stete.error = action.error.message
    //     })

    // }
})

export const {addProduct, editProduct, deleteProduct} = productSlice.actions
export default productSlice.reducer