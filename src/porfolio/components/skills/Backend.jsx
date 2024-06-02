import React from 'react'

const Backend = () => {
  return (
    <section className="rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
      <div>
        <h2 className="text-md font-medium mb-2 p-4">Backend Development</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-16 p-8">
          <div>
           <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">Node JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        

        
          <div>
           <img src={process.env.PUBLIC_URL + '/images/express.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">Express JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        
          <div>
            <img src={process.env.PUBLIC_URL + '/images/django.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">Django</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
      

        
          <div>
           <img src={process.env.PUBLIC_URL + '/images/restapi.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">REST API</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
     

        
          <div>
          <img src={process.env.PUBLIC_URL + '/images/mysql.png'} alt="" className='w-full'/>

            <h3 className="text-sm font-medium">MySQL</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
      

       
          <div>
          <img src={process.env.PUBLIC_URL + '/images/mongo.png'} alt="" className='w-full'/>

            <h3 className="text-sm font-medium">MongoDB</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
     
      </div>
    </section>
  )
}

export default Backend