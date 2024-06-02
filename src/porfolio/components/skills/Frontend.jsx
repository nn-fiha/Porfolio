import React from "react";

const Frontend = () => {
  return (
    <section className="rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
      <div>
        <h2 className="text-md font-medium mb-2 p-4">Frontend Development</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-16 p-8">

          <div>        
            <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">HTML5</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
       

          <div>
          <img src={process.env.PUBLIC_URL + '/images/css.png'} alt="" className='w-full'/>

            <h3 className="text-sm font-medium">CSS3</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
       
          <div>
          <img src={process.env.PUBLIC_URL + '/images/js.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">JavaScript</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        

        
          <div>
          <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">React JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
  

       
          <div>
          <img src={process.env.PUBLIC_URL + '/images/tailwind.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">Tailwind</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
      

          <div>
          <img src={process.env.PUBLIC_URL + '/images/bootstrap.png'} alt="" className='w-full'/>
            <h3 className="text-sm font-medium">Bootstrap5</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
     
      </div>
    </section>
  );
};

export default Frontend;
