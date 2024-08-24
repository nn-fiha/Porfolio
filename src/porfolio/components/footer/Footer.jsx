import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 p-10 w-full">
      <div>
      
        <div class=" w-28 p-2 inline-flex  justify-center">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
        </div>
        <ul className="flex gap-6 justify-center p-4 text-sm ">
          <li>
            <a href="#about" className="text-slate-700 hover:text-slate-900">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-slate-700 hover:text-slate-900"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="text-slate-700 hover:text-slate-900"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <div className="flex gap-5 justify-center m-2 mb-12">
          <a
            href="https://www.facebook.com/nnfiha"
            className="bg-slate-700 inline-flex rounded-lg text-white text-xl p-1 hover:bg-slate-800"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/nn_fiha/"
            className="bg-slate-700 inline-flex rounded-lg text-white text-xl p-1 hover:bg-slate-800"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/nn_fiha"
            className="bg-slate-700 inline-flex rounded-lg text-white text-xl p-1 hover:bg-slate-800"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nnfiha/"
            className="bg-slate-700 inline-flex rounded-lg text-white text-xl p-1 hover:bg-slate-800"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="text-xs text-gray-700 text-center">
          &#169; Fiha. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
