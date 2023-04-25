import React from 'react'

function Services() {
  return (
    <section>
        <div className='all py-4'>
          <div className='textpart'>
              <h2 className='font-extrabold text-lg text-center'>Services</h2>
          </div>
          <div className='flex justify-between space-x-4 mt-4'>
                  <div className='bg-slate-500 leading-6'>
                    <h3 className='uppercase font-bold text-sm text-center '>Announcement</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                  </div>
                  <div className='bg-orange-500'>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                  </div>
                  <div className='bg-red-700'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                  </div>
                  <div className='bg-yellow-400'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                  </div>

          </div>
          <div className='cards'></div>

        </div>
    </section>
  )
}

export default Services