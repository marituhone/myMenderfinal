import React from 'react'
import { useContext } from 'react'



function List({name,price}) {
 
  return (
    <div>
   
   <h2>{name}</h2>
   <p>{price}</p>
 

    </div>
  )
}

export default List