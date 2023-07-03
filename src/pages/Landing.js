import React, { useState } from 'react'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import AnnouncmentList from './AnnouncmentList';

function Landing() {
    const slides =
    [
        {
            url: 'https://th.bing.com/th/id/R.b65f0114ba0a0ddc5ed237ee5523b74b?rik=dwWBk1Y3Z4Ca6g&riu=http%3a%2f%2fasheweyna.net%2fimg%2fportfolio%2fgov2.jpg&ehk=5ytq9tItKLShpKO1eA93MYu00hPf%2bXnM6R2UerNbFiM%3d&risl=&pid=ImgRaw&r=0',
          },
          {
            url: 'https://th.bing.com/th/id/OIP.oLsJKKHvJThQHSgKDAgngAAAAA?pid=ImgDet&rs=1',
          },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevslide = () =>
    {
       const isslider = currentIndex === 0;
       const newindex = isslider ? slides.length -1 : currentIndex-1;
       setCurrentIndex(newindex);
    }

    

    const nextslide = () =>
    {
      const isslider = currentIndex === slides.length-1;
      const newindex = isslider ? 0 : currentIndex + 1;
      setCurrentIndex(newindex);
    }

    const goToSlide = (slideindex) =>
    {
       setCurrentIndex(slideindex)
    }
  return (
    <section className='mt-12'>
        <div className='max-w-[1440px]  h-[650px] w-full m-auto py-8 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30} onClick={prevslide}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={nextslide} />
            </div>
            <div className='flex justify-center py-2 top-4'>
                  {slides.map((slide,slideindex)=> (
                    <div key={slideindex} onClick = {() => goToSlide(slideindex)} className='cursor-pointer text-4xl'>
                      <RxDotFilled />
                     
                    </div>))}
            </div>
            

       </div>
       <AnnouncmentList />

    </section>
  )
}

export default Landing