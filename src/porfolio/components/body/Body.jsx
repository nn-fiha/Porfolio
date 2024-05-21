import './Body.css';
function Data({name, university, dept}){
    return(
        <div className='intro'>
            <h1 className='intro-name'>{name}</h1>
            {/* <h3 className='intro-title'>Web Developer</h3> */}
            <p className='intro-description'>I am currently studying in {dept} Department at {university} and a tech enthusiast. Quite passionate, a people-person, spirited, disciplined as well as obedient. Being a quick learner, i actively seek out opportunities to learn, adapt, develop my knowledge and skills. I have a genuine interest on Web Development. I've gained hands-on experience in HTML5, CSS3, Bootsrap, Tailwind CSS, JavaScript, NodeJS, ExpressJS and other frameworks and tools that power the modern web. I like to travel and reading books or novels in my leisure.</p>
            <a href=""><button className="text-white bg-slate-700 border-none px-5 py-3 font-semibold transition-all rounded"> Say Hello <i class="uil uil-telegram-alt"></i></button></a>
        </div>
    );
}

   
    

function Social(){
    return(
        <div className='icon-container'>
            <a href="https://www.instagram.com/nn_fiha/" className='icon'><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com/nn_fiha" className='icon'><i class="uil uil-twitter"></i></a>
            <a href="https://www.linkedin.com/in/nnfiha/" className='icon'><i class="uil uil-linkedin-alt"></i></a>
            <a href="https://github.com/nn-fiha" className='icon'><i class="uil uil-github-alt"></i></a>
        </div>
    );
}
function Scroll(){
    return(
        
            <div  className='scroll-container'>
            <a href="" className='scroll'><i class='bx bx-mouse'></i>Scroll Down <i class="uil uil-arrow-down"></i>
            </a>
            </div>
        
    );
}

function Body(){
    return(
        <div>
            <div className='body'>
            <Social/>
            <Data name="Nurun Nahar Fiha" university="Jahangirnagar University" dept="Computer Science And Engineering"/>
            <div className='img-container'></div>
            </div>
            <Scroll/>
           
        </div>
    );
}
export default Body;