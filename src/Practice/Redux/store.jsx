import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import themeReducer from "./ThemeSlice";
import todoReducer from "./TodoSlice";

export const store = configureStore({

    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        todos: todoReducer
    }


})