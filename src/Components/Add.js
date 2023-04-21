import React, { useContext, useState } from 'react'
import Moviecontext from './Movieprovider'

function Add() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(Moviecontext)

    const updateName = (e) =>
    {
        setName(e.target.value)
    }
  
    const updatePrice = (e) =>
    {
        setPrice(e.target.value)
        
    }

 
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setMovies(prev => [...prev,{name:name ,price:price}])
    }

   
           
    
  return (
    <form onSubmit={handleSubmit}> 
        <input className='border-2' type='text' name='name' value={name} onChange={updateName}/><br></br>
        {/* <input className='border-2' type='text' name='price' value={price} onChange={updatePrice}/> */}
        <input className='border-2' type='text'value={price} onChange={updatePrice}/>
      
        <button>Submit</button>
    </form>
  )
}

export default Add