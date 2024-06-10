import './Header.css'
import { useState } from "react";
function Header(){

//     return(
// <header className='flex items-center justify-around gap-28 h-24 fixed z-50 left-0 right-0 top-0 bg-slate-50 '>  
    
// </header>

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-slate-50 fixed z-50 left-0 right-0 top-0">
           
            <section className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                       
                        <div className="w-32 ml-16">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt=""/>
                        </div>
                       
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <i class="uil uil-times"></i>
                                ) : (
                                    <i class="uil uil-align-justify"></i>
                                )}
                            </button>
                        </div>
                    </div>
                
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-medium ${navbar ? "flex flex-row" : "flex-col"}`}>
                          
                            <li className='p-2 list-none'><a href="#home">Home</a></li>
                            <li  className='p-2 list-none'><a href="#about">About</a></li>
                            <li  className='p-2 list-none'><a href="#education">Education</a></li>
                            <li  className='p-2 list-none'><a href="#skills">Skills</a></li>
                            <li  className='p-2 list-none'><a href="#projects">Projects</a></li>
                            <li  className='p-2 list-none'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </nav>

    );
}
export default Header;