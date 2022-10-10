import React, { createContext, useReducer } from "react";
import allProducts from "../Data";

const initialState = {
    allProducts,
    basket: [],
}

const reduce = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const ProductContext = createContext();
export const ProductDispath = createContext();

export default function ContextProvider({ children }) {
    const [state, dispath] = useReducer(reduce, initialState);
    return (
        <ProductContext.Provider value={{ state }}>
            <ProductDispath.Provider value={{ dispath }}>
            {children}
            </ProductDispath.Provider>
        </ProductContext.Provider>    
    )
}
