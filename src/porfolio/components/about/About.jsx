
import Info from './Info'
import CV from './Resume.pdf'


function About (){
  return (
    <section id='about' className='p-8 mb-20'>
       <h2 className='text-2xl font-bold'>About Me</h2> 
       <span className='text-xs text-gray-500'>My Introduction</span>
       <div className='flex flex-col md:flex-row justify-center items-center gap-20 mt-10'>
        <div className='h-80'>
        <img src={process.env.PUBLIC_URL + '/images/fiha about.jpg'} alt="" className='w-68 h-full rounded-2xl justify-center '/>
        </div>
        <div className='w-auto md:w-[450px]'>
            <Info/>
            <p className='my-5 p-2 text-justify text-gray-700 text-sm'>During my four years long graduation period, I have completed several projects on different languages and frameworks. In this period, I have developed several web applications that utilized Django, MySQL, Nodejs, Expressjs, Reactjs, MongoDB. These gave me hands-on experience in building scalable and efficient applications and also involved database design, server-side logic, and RESTful APIs.


</p>
            <a download="" href={CV}><button className='text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded-md hover:bg-slate-600'> Download CV <i class="uil uil-file-download-alt text-xl"></i></button></a>
        </div>
       </div>

    </section>
  )
}

export default About;