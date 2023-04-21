import React, { useState,createContext } from 'react'

 const Moviecontext = createContext();
export const Movieprovider =(props) =>{
    const  [movies,setMovies] = useState([
        {
            name: 'hp',
            price: '$123',
            id: '1212.'

        },
        {
            name: 'ko',
            price: '$123',
            id: '1223.'

        }

    ]);
    
  return (
    <Moviecontext.Provider value={[movies,setMovies]}>
        {props.children}
    </Moviecontext.Provider>
  )
}

export default Moviecontext;