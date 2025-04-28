
import React from 'react';
import './Body.css';
import CV from './Resume.pdf'
function Data({name}){
    return(
        <div className='-ml-24 md:ml-[4%]'>
            <h1 className='text-left mb-6 text-3xl font-bold'>{name}</h1>
            {/* <h3 className='intro-title'>Web Developer</h3> */}
            <p className='text-justify mb-8 max-w-[375px] md:max-w-[600px] text-sm text-gray-700'>
            I am a Software Quality Assurance Engineer who loves ensuring that software works perfectly and provides a great experience for users. Being detail-oriented and a good communicator, I enjoy solving problems while working with others.
            <br/> <br/>
            I have a strong interest in business analysis, working with databases, and improving processes to make systems more efficient. I have experience working with technologies like HTML5, CSS3, JavaScript, NodeJS, ExpressJS, Django, ReactJS, and MongoDB. I enjoy working on small pet projects, where I can explore building applications, designing databases, and creating useful APIs.
            <br/><br/>
            I am passionate about continuous learning and constantly seek opportunities to grow both technically and professionally. Outside of work, I love traveling and getting lost in a good book to recharge, always looking for new ways to expand my horizons.
            </p>
            {/* <a href="#contact"><button className="text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded hover:bg-slate-600"> Say Hello <i class="uil uil-telegram-alt"></i></button></a> */}
            <a download="" href={CV}><button className='text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded-md hover:bg-slate-600'> Download Resume <i class="uil uil-file-download-alt text-xl"></i></button></a>

        </div>
    );
}


function Social(){
    return(
        <div className='flex flex-col gap-8 mt-10 md:mt-[120px] ml-[8%] md:ml-[13%]'>
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
            <div className='flex text-left mt-28 md:mt-40 gap-8 md:gap-11 p-8'>
            <Social/>
            <div className='flex flex-col-reverse md:p-8 md:flex-row text-left gap-20'>
            <Data name="Nurun Nahar Fiha"/>
            <div className='img-container'></div>
            </div>
           
            </div>

        </div>
    );
}


  
  
export default Body;


