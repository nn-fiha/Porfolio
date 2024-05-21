
import Info from './Info'


function About (){
  return (
    <section>
       <h2 className='text-2xl font-bold '>About Me</h2> 
       <span className='text-xs text-gray-500'>My Introduction</span>
       <div className='flex justify-center items-center gap-14 mt-10'>
        <div className='h-60'>
        <img src={process.env.PUBLIC_URL + '/images/fiha.jpg'} alt="" className='w-60 h-full rounded-2xl '/>
        </div>
        <div className='w-[500px]'>
            <Info/>
            <p className='p-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia beatae, rem molestias assumenda temporibus esse cum? Esse, doloribus nemo!</p>
            <a download="" href=""><button className='text-white bg-slate-700 border-none px-5 py-3 font-semibold transition-all rounded'> Download CV <i class="uil uil-file-download-alt"></i></button></a>
        </div>
       </div>

    </section>
  )
}

export default About;