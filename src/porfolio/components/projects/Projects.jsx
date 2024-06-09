import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='p-8 mb-20'>
 
    <h2 className='text-2xl font-bold'>Projects</h2> 
    <span className='text-xs text-gray-500'>My existing projects</span>
    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-10 mt-10 md:px-20">
        <div className="w-auto md:w-72  rounded-lg shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/OBE2.png'} alt="" className='rounded-lg h-60'/>
         <h2 className="text-sm font-medium text-left mt-2">OBE Based Result Management System</h2>
         <a href="https://github.com/whomping-willow/OBE"><h2 className='text-left text-xs text-gray-500 mt-1 '>Git Link -></h2></a>
        </div>

        <div className="w-auto md:w-72  rounded-lg shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/kontaNiben.png'} alt="" className='rounded-lg'/>
         <h2 className="text-sm font-medium text-left mt-2">Konta Niben?</h2>
         <a href="https://github.com/SQA-PROJECT-1/Konta-Niben"><h2 className='text-left text-xs text-gray-500 mt-1 '>Git Link -></h2></a>
        </div>

        <div className="w-auto md:w-72  rounded-lg shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/cyber.jpg'} alt="" className='rounded-lg h-60'/>
         <h2 className="text-sm font-medium text-left mt-2">Cyber Bullying Detection using Machine Learning</h2>
         <a href="https://github.com/SM2142/Cyber-Bullying-Detection-on-Scocial-Media-Plaform-Using-Machine-Learning"><h2 className='text-left text-xs text-gray-500 mt-1 '>Git Link -></h2></a>
        </div>

        <div className="w-auto md:w-72  rounded-lg overflow-hidden shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/kontaNiben.png'} alt="" className='rounded-lg'/>
         <h2 className="text-sm font-medium text-left mt-2">BoiPoka</h2>
         <a href="https://boi-poka.vercel.app/"><h2 className='text-left text-xs text-gray-500 mt-1 '>Demo -></h2></a>
        </div>

        <div className="w-auto md:w-72 rounded-lg overflow-hidden shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/kontaNiben.png'} alt="" className='rounded-lg'/>
         <h2 className="text-sm font-medium text-left mt-2">Cineflix</h2>
         <a href="https://cineflix-fiha.netlify.app/"><h2 className='text-left text-xs text-gray-500 mt-1 '>Demo -></h2></a>
        </div>

        <div className="w-auto md:w-72 rounded-lg overflow-hidden shadow-lg px-4 py-4 border">
         <img src={process.env.PUBLIC_URL + '/images/kontaNiben.png'} alt="" className='rounded-lg'/>
         <h2 className="text-sm font-medium text-left mt-2">JU CSE Routinery</h2>
         <a href="https://github.com/nn-fiha/JU-CSE-ROUTINARY"><h2 className='text-left text-xs text-gray-500 mt-1 '>Git Link -></h2></a>
        </div>
        
    </div>
    </section>
  )
}

export default Projects