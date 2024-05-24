import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-50 p-10'>
        <div>
            <h1 className='font-semibold p-4' >FIHA</h1>
            <ul className='flex gap-10 justify-center'>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Projects</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                </ul>
            <div className="flex gap-5 justify-center m-2">
                <a href="" className=''><i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/nn_fiha/" className=''><i class='bx bxl-instagram' ></i></a>
                <a href="https://twitter.com/nn_fiha" className=''><i class='bx bxl-twitter' ></i></a>
                <a href="https://www.linkedin.com/in/nnfiha/" className=''><i class='bx bxl-linkedin'></i></a>
            </div>

            <span className="text-xs text-gray-700 text-center p-10 mt-10">&#169; Fiha. All rights reserved.</span>
            
        </div>
    </footer>
  )
}

export default Footer