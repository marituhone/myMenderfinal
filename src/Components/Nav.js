import React, { useContext } from 'react'
import Moviecontext from './Movieprovider'


function Nav() {
    const [movies,setMovies] = useContext(Moviecontext)

  return (
    <div>
         <h2>{movies.length}</h2>
    </div>
  )
}

export default Nav