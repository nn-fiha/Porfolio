
import Info from './Info'
import CV from './Resume.pdf'


function Experience (){
  return (
    <section id='experience' className='p-8 mb-10 md:mb-20 ml-10 md:ml-60 md:w-[70%] align-middle'>
       <h2 className='text-2xl font-bold text-center'>Work Experience</h2> 
       <span className='text-xs text-gray-500 text-center'>Companies</span>
      
       <div className="">
        {/* Zelf Technologies Experience */}
      <div className='flex flex-col md:grid grid-cols-2 justify-between items-center gap-10 md:gap-20 mt-4'>
        <div className='pt-5'>
          <h3 className="text-xl font-semibold pb-2">SQA Engineer</h3>
          <p className="text-sm text-gray-600">
            Dec 2024 – Present | <span className="italic"><a href="https://www.hellozelf.com/" className='text-blue-600'>Zelf Technologies Inc.</a>, Brooklyn, New York, USA</span>
          </p>
          
          <ul className="mt-4 list-disc text-sm text-gray-700 space-y-2 flex justify-center text-left">
  <div className="list-inside">
  <li>Conducted functional, regression, smoke, sanity, and user acceptance testing to ensure high-quality software delivery.</li>
  <li>Investigated and analyzed issues to identify the root cause of bugs, ensuring faster resolution and preventing recurrence.</li>
  <li>Reported, tracked, and managed bugs effectively using Jira board, maintaining clear communication with the development team.</li>
  <li>Developed and maintained detailed test cases to streamline testing processes and improve test coverage.</li>
  <li>Worked cross-functionally with developers and stakeholders to align on project goals and ensure seamless delivery of features.</li>
  </div>
</ul>
        </div>
        <div className=''>
        <img src={process.env.PUBLIC_URL + '/images/zelflogo-Cv6SuQ3l.png'} alt=""/>
        <p className="mt-6 text-gray-700 text-sm text-justify">Zelf enables brands navigate the ‘new norm’ where everyday consumers are shaping brand narratives & beginning their customer journey on video-based platforms via social listening, reporting, sentiment analysis & AI driven 1:1 engagement brand awareness campaigns.

          </p>
        </div>
        </div>

        {/* DSi Experience */}
        <div className='flex flex-col md:grid grid-cols-2 justify-between items-center gap-10 md:gap-20 mt-10'>
        {/* Zelf Technologies Experience */}
        <div className='pt-5'>
          
        <h3 className="text-xl font-semibold pb-2">Junior SQA Engineer</h3>
          <p className="text-sm text-gray-600">
            April 2024 – Dec 2024 | <span className="italic"><a href="https://www.dsinnovators.com/" className='text-blue-600'>Dynamic Solution Innovators (DSi)</a>, Mohakhali, Dhaka</span>
          </p>
          
          <ul className="mt-4 list-disc text-sm text-gray-700 space-y-2 flex justify-center text-left">
  <div className="list-inside">
    <li>Conducted functional, regression, sanity, smoke, and user acceptance testing.</li>
    <li>Reported and tracked bugs using Microsoft Azure Board.</li>
    <li>Developed and managed test cases in Qase.</li>
    <li>
      Assisted PM & BA with writing, reviewing, and providing feedback on user stories, coordinating with developers for project alignment.
    </li>
  </div>
</ul>
    </div>
        <div className=''>
        <img src= "https://www.openrefactory.com/wp-content/uploads/2020/01/DSI-Logo-1.png" alt="" className='h-20 p-0'/>
        <p className="mt-6 text-gray-700 text-sm  text-justify">Dynamic Solution Innovators (DSi) is a provider of information technology solutions. It offers machine learning, big data environment, data science, Off Dock Management, software development, digital verification, enterprise resource solutions, and more.
        <br/><strong>Project Name:</strong> KeyPleaz, a USA-based app connecting Real Estate Agents Instantly.
          </p>
        </div>
        </div>
    
       
      </div>

    </section>
  )
}

export default Experience;

 {/* <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10'>
        <div className='h-80'>
        <img src={process.env.PUBLIC_URL + '/images/fiha about.jpg'} alt="" className='w-68 h-full rounded-2xl justify-center '/>
        </div>
        <div className='w-auto md:w-[490px] px-3 md:px-0'>
            <Info/>
            <p className='my-5 p-6 md:p-2 text-justify text-gray-700 text-sm'>During my four years long graduation period, I have completed several projects on different languages and frameworks. In this period, I have developed several web applications that utilized Django, MySQL, Nodejs, Expressjs, Reactjs, MongoDB. These gave me hands-on experience in building scalable and efficient applications and also involved database design, server-side logic, and RESTful APIs.
            </p>
            <a download="" href={CV}><button className='text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded-md hover:bg-slate-600'> Download CV <i class="uil uil-file-download-alt text-xl"></i></button></a>
        </div>
       </div> */}