import './Body.css';
function Data({name, university, dept}){
    return(
        <div className='intro'>
            <h1 className='intro-name'>{name}</h1>
            <h3 className='intro-title'>Web Developer</h3>
            <p className='intro-description'>I am currently studying in {dept} Department at {university} and a tech enthusiasts, able to express myself both creatively and honestly. I'm quite passionate, a people-person, adaptive, spirited, hard worker, disciplined as well as obedient. Always looking for opportunities to enrich my knowledge and skills.</p>
            <a href=""><button className='button'> Say Hello <i class="uil uil-telegram-alt"></i></button></a>
        </div>
    );
}
function Social(){
    return(
        <div className='icon-container'>
            <a href="" className='icon'><i class="uil uil-instagram"></i></a>
            <a href="" className='icon'><i class="uil uil-dribbble"></i></a>
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