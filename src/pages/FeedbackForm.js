import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function FeedbackForm() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [sucess,setSucess] = useState(false);

  const handleSubmit = async (e) => {
     e.preventDefault();  
      // Create a data object with the values from the state
      const data = {
        title,
        description,
      };
  
      try {
        const response = await axios.post('http://localhost:8000/api/feedback/', data);
        console.log(response.data); // Handle the response data as needed
        console.log(data)
        console.log("feedback sucessfull");
      } catch (error) {
        console.error(error);
      }
  }
  return (
    <section className='py-11 px-4'> 
        <div className='sm:w-full sm:max-w-md sm:mx-auto space-y-4' >
            <h3 className='font-serif font-semibold text-center'>Leave comment</h3>
            <form className='w-full bg-white border border-gray-300 shadow rounded-lg space-y-6 py-12 px-6'>
                  <div className='space-y-4'>
                    <label htmlFor='title' className='block font-medium font-serif text-gray-700' >Title</label>
                    <input type='text' id='title'className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' onChange={(e)=>setTitle(e.target.value)}  />
                    <label htmlFor='title' className='block font-medium font-serif text-gray-700' >Description</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' onChange={(e)=>setDescription(e.target.value)} ></textarea>
                  </div>
                   <div>
                        <Link to="/">
                            <button  type="submit" className='w-full justify-center bg-indigo-600 px-4 border-transparent font-medium  shadow-sm text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md' onClick={handleSubmit}>Save</button>
                        </Link>
                    </div>


            </form>
        </div>
    </section>
  )
}

export default FeedbackForm