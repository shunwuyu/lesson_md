import { useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Products from './components/Products/Products';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Basket from './components/Basket/Basket';
import ContextProvider from './context/ContextProvider';
import ContextFilter from './context/ContextFilter';
import Header from './components/Header/Header';

function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ])

  return (
    <ContextProvider>
      <ContextFilter>
      <Header />
      {router}
      </ContextFilter>
    </ContextProvider>
  )
}

export default App
