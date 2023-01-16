import { configureStore } from "@reduxjs/toolkit"
import mangaListReducer from "./slices/mangaListSlice"

export const store = configureStore({
    reducer:{
        mangaListReducer
    }
})