import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import products from "./products.slice"
import persistReducer from "redux-persist/es/persistReducer"

const persistConfig = {
    key: "products",
    storage
}

const reducer = combineReducers({
    products : persistReducer(persistConfig, products)
})  

export default reducer