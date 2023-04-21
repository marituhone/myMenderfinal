import React, { useContext, useState } from 'react'
import List from './List';
import Moviecontext from './Movieprovider'

function MovieList() {
    const [movies,setMovies] = useContext(Moviecontext)
  
  return (
    <div>
      {movies.map((movie =>
      {
       return <List name={movie.name} key={movie.id} price={movie.price} />
      }
       ))}
       {/* <h1>{value}</h1> */}

    </div>
  )
}

export default MovieList