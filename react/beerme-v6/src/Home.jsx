import React, { useState, useEffect } from 'react'
import Header from "./Header";
import Search from "./Search";
import Results from './Results';

const Home = () => {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async function() {
            const response = await fetch('http://localhost:1234/beers')
            setBeers(response.json())
            setLoading(false)
        })()
    }, [])
    return (
        <div className="wrapper">
            <Header siteName="Beer me!" />
            <Search />
            <Results beers={ beers } loading={ loading } />
        </div>
    )
}

export default Home