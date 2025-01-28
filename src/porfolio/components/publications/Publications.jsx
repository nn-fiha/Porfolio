import React from 'react'

const Publications = () => {
  return (
    <section id='publications' className='p-8 mb-10 md:mb-20'>
       <h2 className='text-2xl font-bold text-center ml-2 md:ml-0'>Publications</h2> 
       <span className='text-xs text-gray-500 text-center ml-2 md:ml-0'>Papers</span>

       
       <div className="border-l-4 border-s-slate-600 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 w-full max-w-6xl mt-6 md:ml-40">
      <p className="text-gray-800 font-normal text-left">
        <a href="#" className="hover:underline text-blue-600 font-semibold">
        Deep Learning Based Bangladeshi Currency Coin Recognition.
        </a> Serajum Monira, <strong>Nurun Nahar Fiha</strong>, Md. Golam Moazzam, Md. Musfique Anwar. <i className='text-sm'>4th International Conference on Robotics, Electrical and Signal Processing Techniques 2025 (4th ICREST’25)
        </i>   
      </p>
      <div className="flex justify-between gap-2 mt-2">
        <div>
        <span className="bg-yellow-300 text-xs px-2 py-1 rounded-md">Under Review</span>
        </div>
        <div>
        <a href="/" className="border border-green-700 text-green-700 px-3 py-1 mr-2 text-sm rounded-md hover:bg-green-700 hover:text-white">
        <i class='bx bxs-quote-single-right'></i> Citation 
        </a>

        <a href="/" className="border border-blue-700 text-blue-700 px-3 py-1 text-sm rounded-lg hover:bg-blue-700 hover:text-white">
        <i class='bx bx-link'></i> Source
        </a>
        </div>
        
      </div>
    </div>



      
    
    </section>


  )
}

export default Publications