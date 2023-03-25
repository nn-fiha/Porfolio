import './Header.css'
function Header(){
    return(
<header>
    <section className='logo-container'>
        <p>FIHA</p>
    </section>
    <section>
        <ul className='nav-info'>
            <li><a href="#">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Porfolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </section>
</header>
    );
}
export default Header;