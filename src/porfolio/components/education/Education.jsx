import React from 'react'

const Education = () => {
  return (
    <section id='education' className='p-8 mb-20'>
       <h2 className='text-2xl font-bold'>Educational Background</h2> 
       <span className='text-xs text-gray-500'>Institutions</span>

       
       <div className='flex gap-10 justify-start md:justify-center text-left mb-8 mt-16 md:ml-28'>
        <div>
            <h2 className='font-semibold'>2019-2024</h2>
        </div>
        <div>
            <h2 className='font-semibold'>Bachelor of Science (Eng.) in Computer Science and Engineering</h2>
            <h2>Jahangirnagar University, Savar, Dhaka.</h2>
            <h2 className='font-medium'>CGPA: 3.67/4.00</h2>
            <span className='font-semibold'>Thesis Title: </span><span>Deep Learning Based Bangladeshi Currency Coin Recognition.</span>
        </div>
       </div>

       <div className='flex gap-10 justify-start md:ml-[405px] text-left mb-8'>
        <div>
            <h2 className='font-semibold'>2016-2018</h2>
        </div>
        <div>
            <h2 className='font-semibold'>HSC in Science</h2>
            <h2>Dr. Mahbubur Rahman Mollah College, Dhaka.</h2>
            <h2 className='font-medium'>GPA: 5.00/5.00 (A+)</h2>
            
        </div>
       </div>

       <div className='flex gap-10 text-left justify-start md:ml-[405px]'>
        <div>
            <h2 className='font-semibold'>2014-2016</h2>
        </div>
        <div>
            <h2 className='font-semibold'>SSC in Science</h2>
            <h2>Sheikhdi A. M. High School, Jatrabari, Dhaka.</h2>
            <h2 className='font-medium'>GPA: 5.00/5.00 (A+)</h2>
            
        </div>
        </div>
    
    </section>


  )
}

export default Education