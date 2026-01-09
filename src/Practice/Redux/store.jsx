import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import themeReducer from "./ThemeSlice"

export const store = configureStore({

    reducer: {
        counter: counterReducer,
        theme: themeReducer
    }


})