import { useState } from 'react';
import './Header.css'
function Header(){
    const [toggle,showMenu]= useState(false);
    return(
<header className='header fixed bg-white'>
    <section className='logo-container'>
        <p>FIHA</p>
    </section>
    <section>
        <ul className='nav-info'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Porfolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </section>
    <section>
        <i class='uil uil-times nav_close'></i>
    </section>
</header>
    );
}
export default Header;