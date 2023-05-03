import React, { useState } from 'react'
import { BiChevronDown} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({title,re1,re2,re3,re4,re5}) {
  const [isopen,setOPen] = useState(false);
  const handleClick = (e) =>
  {
        
    e.preventDefault();
    setOPen(!isopen);
  }
  return (
      <section className='space-x-6'>
           <div className='title flex justify-between  cursor-pointer' onClick={handleClick}>
                <h2 className='text-xl font-serif font-medium text-blue-600'>{title}</h2>
                <BiChevronDown className={`text-3xl transition-all duration-500 ${isopen ? 'rotate-180' : ''}`}></BiChevronDown>
           </div>
           <AnimatePresence>
           {isopen &&  (
              <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }} className='explin font-serif  overflow-clip'>
                <ol className='list-decimal'>
                    <li>{re1 ? (<p>{re1}</p>) :''}</li>
                    <li>{re2 ? (<p>{re2}</p>) :''}</li>
                    <li>{re3 ? (<p>{re3}</p>) :''}</li>
                    <li> {re4 ? (<p>{re4}</p>) :''}</li>
                    <li>{re5 ? (<p>{re5}</p>) :''}</li>

                  </ol>
                  

              </motion.div> )}
           </AnimatePresence>
         
      </section>
  )
}

export default Accordion