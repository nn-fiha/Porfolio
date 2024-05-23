
import Info from './Info'


function About (){
  return (
    <section id='about' className='p-8'>
       <h2 className='text-2xl font-bold'>About Me</h2> 
       <span className='text-xs text-gray-500'>My Introduction</span>
       <div className='flex justify-center items-center gap-20 mt-10'>
        <div className='h-80'>
        <img src={process.env.PUBLIC_URL + '/images/fiha.jpg'} alt="" className='w-80 h-full rounded-2xl justify-center '/>
        </div>
        <div className='w-[450px]'>
            <Info/>
            <p className='my-5 p-2 text-justify text-gray-500 text-sm'>I have developed websites for both academic and personal projects with UI/UX user interface using HTML5, CSS3, Bootsrap, Tailwind CSS, JavaScript, NodeJS, ExpressJS and other frameworks and tools that power the modern web.</p>
            <a download="" href=""><button className='text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded-md'> Download CV <i class="uil uil-file-download-alt text-xl"></i></button></a>
        </div>
       </div>

    </section>
  )
}

export default About;