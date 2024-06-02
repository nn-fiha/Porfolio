import React from 'react'

const Language = () => {
  return (
    <section className=" rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
    <div>
      <h2 className="text-md font-medium mb-2 p-4">Language & Others</h2>
    </div>
    <div className="flex flex-col md:flex-row gap-16 p-8">

     
        <div>
        <img src={process.env.PUBLIC_URL + '/images/c.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">C</h3>
          <span className="text-[10px] text-gray-500">Advanced</span>
        </div>
     
        <div>
        <img src={process.env.PUBLIC_URL + '/images/c++.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">C++</h3>
          <span className="text-[10px] text-gray-500">Advanced</span>
        </div>
      
        <div>
        <img src={process.env.PUBLIC_URL + '/images/java.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">Java</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
   
        <div>
        <img src={process.env.PUBLIC_URL + '/images/python.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">Python</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
     
        <div>
        <img src={process.env.PUBLIC_URL + '/images/ml.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">ML</h3>
          <span className="text-[10px] text-gray-500">Basic</span>
        </div>
     
        <div>
        <img src={process.env.PUBLIC_URL + '/images/android.png'} alt="" className='w-full'/>

          <h3 className="text-sm font-medium">Android Dev</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
    
    </div>
  </section>
  )
}

export default Language