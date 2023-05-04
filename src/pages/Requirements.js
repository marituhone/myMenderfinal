import React from 'react'
import Accordion from "../Components/Accordion";
import { accordions  } from "../Components/Data";

function Requirements() {
  return (
   <section className='mt-10 mb-32'>
    
      <div className='max-w-[720] w-full flex flex-col gap-6 px-24'>
        {accordions.map((item,id)=>
        {
          const {title,re1,re2,re3,re4,re5} = item;
           return (
            <div className='border-l-8 border-indigo-500 shadow-sm  px-2 py-2' key={id}>
              <Accordion title={title} re1={re1} re2={re2} re3={re4} re4={re4}></Accordion>
            </div>
           )
        })}

      </div>

   </section>
  )
}

export default Requirements