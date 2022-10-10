import React, { createContext, useReducer } from "react";
import allProducts from "../Data";

const initialFilterState = {
    filteredItems: [...allProducts],
    searchKey: ""
}

const filterReduce = (state, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default function ContextFilter({ children }) {
    const [state, dispath] = useReducer(filterReduce, initialFilterState);
    return (
        <FilterContext.Provider value={{ state }}>
            <FilterDispath.Provider value={{ dispath }}>
            {children}
            </FilterDispath.Provider>
        </FilterContext.Provider>
    )
}