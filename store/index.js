// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
    reducer: {
        rootReducer,
    }
})