import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Recommend from '@/pages/Recommend'

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/recommend" replace={true}/>}/>
            <Route path="/recommend" element={<Recommend />}/>
        </Routes>
    )
}
export default RouterConfig