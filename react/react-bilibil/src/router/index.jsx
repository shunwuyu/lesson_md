// 独立配置文件 
import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
const Search = lazy(() => import('../pages/Search'))

// Routes 不能和react-router-dom 一样
const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/404" element={<div>Page Not Found</div>}/>
            <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    )
}

export default RoutesConfig