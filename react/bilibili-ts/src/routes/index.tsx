import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Search = lazy(() => import ('@/pages/Search'))
const Home = lazy(() => import ('@/pages/Home'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </>
    )
}

  
