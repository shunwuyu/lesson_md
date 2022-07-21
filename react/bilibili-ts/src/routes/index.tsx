import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Search = lazy(() => import ('@/pages/Search'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </>
    )
}

  
