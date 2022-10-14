import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from './ajax-loader.gif';
import Movie from './Movie';
import './style.css';
import {Header} from './Header';
import Search from './Search';

const MOVIE_API_URL = 'init_movie'


const HookMovie = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    // console.log('---------------')
    setTimeout(() => {
      axios.get(MOVIE_API_URL)
      .then(res => {
        setMovies(res.data.Search);
        setLoading(false)
      })
    }, 2000)
  }, [])

  const search=searchValue=>{
    setLoading(true)
    axios.post('search_movie')
    .then(res=>{
      setMovies(res.data.Search);
      setLoading(false)
    });
  }

  const renderMovies = 
    loading?(
      <img className="spinner" src={spinner} alt='Loadding spinner'/>
    ):(
      movies.map((movie,index)=>(
        <Movie key={movie.imdbID} movie={movie}/>
      ))
    )

  return(
    <div className="hook-movie">
      <Header title="Movie"/>
      <Search search={search}/>
      <div className="movies">{renderMovies}</div>
    </div>
  )
}

export default HookMovie;
