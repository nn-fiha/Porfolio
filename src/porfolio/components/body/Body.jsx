import './Body.css';
function Data({name, university, dept}){
    return(
        <div className='-ml-16 md:ml-[4%]'>
            <h1 className='text-left mb-6 text-3xl font-bold'>{name}</h1>
            {/* <h3 className='intro-title'>Web Developer</h3> */}
            <p className='text-justify mb-8 max-w-[600px] text-sm text-gray-700'>I am a recent graduate from the {dept} Department at {university} and a tech enthusiast. I am quite passionate, personable, and known for my enthusiasm, discipline, and strong work ethic. Being a quick learner, I actively seek out opportunities to learn, adapt, develop my knowledge and skills. I have a genuine interest on Web Development. I've gained hands-on experience in HTML5, CSS3, Bootsrap, Tailwind CSS, JavaScript, NodeJS, ExpressJS and other frameworks and tools that power the modern web. I like to travel and reading books or novels in my leisure.</p>
            <a href="#contact"><button className="text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded hover:bg-slate-600"> Say Hello <i class="uil uil-telegram-alt"></i></button></a>
        </div>
    );
}


function Social(){
    return(
        <div className='flex flex-col gap-4 mt-[87px] ml-[13%]'>
            <a href="https://www.instagram.com/nn_fiha/" className='icon'><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com/nn_fiha" className='icon'><i class="uil uil-twitter"></i></a>
            <a href="https://www.linkedin.com/in/nnfiha/" className='icon'><i class="uil uil-linkedin-alt"></i></a>
            <a href="https://github.com/nn-fiha" className='icon'><i class="uil uil-github-alt"></i></a>
        </div>
    );
}

function Body(){
    return(
        <div id='home' className='mb-10 md:mb-20'>
            <div className='flex text-left mt-48 gap-8 md:gap-11 p-8'>
            <Social/>
            <div className='flex flex-col-reverse md:p-8 md:flex-row text-left gap-20'>
            <Data name="Nurun Nahar Fiha" university="Jahangirnagar University" dept="Computer Science And Engineering"/>
            <div className='img-container'></div>
            </div>
           
            </div>

        </div>
    );
}


  
  
export default Body;


