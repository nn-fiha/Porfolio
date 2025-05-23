import React from 'react';

function Info() {
  return (
    <section className="flex flex-row px-3 items-center gap-3 md:gap-5">
        <div className="max w-[120px] md:w-[140px] rounded-lg overflow-hidden shadow-lg md:px-6 py-3 border">
         <i class='bx bx-award text-2xl mb-1' ></i>
         <h2 className="text-sm font-medium">Experience</h2>
         <span className='text-xs text-gray-500'>1 year working</span>
        </div>
        <div className="max w-[120px] md:w-[140px] rounded-lg overflow-hidden shadow-lg  md:px-6 py-3 border"> 
        <i class='bx bx-briefcase-alt text-2xl mb-1'></i>
        <h2 className="text-sm font-medium">Completed</h2>
        <span className='text-xs text-gray-500'>6+ projects</span>
        </div>
        <div className="max w-[120px] md:w-[140px] rounded-lg overflow-hidden shadow-lg md:px-6 py-3 border">
        <i class='bx bx-support text-2xl mb-1'></i>
        <h2 className="text-sm font-medium">Support</h2>
        <span className='text-xs text-gray-500'>Online 24/7</span>
        </div>
    </section>
  )
}

export default Info;