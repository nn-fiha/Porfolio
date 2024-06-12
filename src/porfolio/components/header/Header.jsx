import './Header.css'
import { useState } from "react";
function Header(){

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
                                    <i class='bx bx-grid-alt' ></i>
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
                        <ul className={`items-center justify-center md:flex md:space-x-6 md:space-y-0 font-medium ${navbar ? "grid grid-cols-3" : "flex flex-row"}`}>
                          
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

{/* <i class='bx bx-home-alt'></i>
<i class='bx bx-user'></i>
<i class='bx bx-file'></i>
<i class='bx bx-send'></i>
<i class='bx bxs-graduation'></i>
<i class='bx bxs-graduation'></i> */}