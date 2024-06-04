import { useState } from 'react';
import './Header.css'

function Header(){
    const [toggle,showMenu]= useState(false);
    return(
<header className='flex items-center justify-around gap-28 h-24 fixed z-50 left-0 right-0 top-0 bg-slate-50 '>

    <section className="w-32 ml-16">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt=""/>
    </section>
   
    <section>
  
        <ul className='flex gap-4 font-medium'>
            <li className='p-2 list-none'><a href="#">Home</a></li>
            <li  className='p-2 list-none'><a href="#about">About</a></li>
            <li  className='p-2 list-none'><a href="#education">Education</a></li>
            <li  className='p-2 list-none'><a href="#skills">Skills</a></li>
            <li  className='p-2 list-none'><a href="#projects">Projects</a></li>
            <li  className='p-2 list-none'><a href="#contact">Contact</a></li>
        </ul>
    </section>
    
</header>
    );
}
export default Header;