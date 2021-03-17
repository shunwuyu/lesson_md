import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from '.ajax-loader.gif';
const MOVIE_API_URL = 'init_movie'

const HookMovie = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    // console.log('---------------')
    axios.get(MOVIE_API_URL)
      .then(res => {
        setMovies(res.data.Search);
        // console.log(res)
      })
  }, [])

  const renderMovies = 
    loading?(
      <img className="spinner" src={spinner} alt='Loadding spinner'/>
    ):(
      movies.map((movie,index)=>(
        <div></div>
      ))
    )

  return(
    <div className="hook-movie">
      hook
    </div>
  )
}

export default HookMovie;
