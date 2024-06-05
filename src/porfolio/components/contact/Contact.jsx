import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 mb-20">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <span className="text-xs text-gray-500">My Contact</span>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div>
          <h2 className="p-10 text-slate-700 font-medium">Hate Form? DM me!</h2>
          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border mb-5"> 
          <i class='bx bx-briefcase-alt text-2xl mb-1'></i>
          <h2 className="text-sm font-medium">Email</h2>
          <h2 className='text-xs text-gray-500 mb-2'>nnfiha@gmail.com</h2>
          <a href="https://www.linkedin.com/in/nnfiha/"><span className='text-xs text-gray-500'>Write me <i class='bx bx-chevron-right text-lg align-middle'></i></span>
          </a>
          </div>

          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border mb-5"> 
          <i class='bx bx-briefcase-alt text-2xl mb-1'></i>
          <h2 className="text-sm font-medium">LinkedIn</h2>
          <h2 className='text-xs text-gray-500 mb-2'>nn_fiha</h2>
          <a href="https://www.linkedin.com/in/nnfiha/"><span className='text-xs text-gray-500'>Write me <i class='bx bx-chevron-right text-lg align-middle'></i></span>
          </a>
          </div>

          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border"> 
          <i class='bx bxl-messenger text-2xl mb-1'></i>
          <h2 className="text-sm font-medium">Messenger</h2>
          <h2 className='text-xs text-gray-500 mb-2'>nnfiha</h2>
          <a href="https://www.linkedin.com/in/nnfiha/"><span className='text-xs text-gray-500'>Write me <i class='bx bx-chevron-right text-lg align-middle'></i></span>
          </a>
          </div>

        </div>

        <div>
        <h2 className="p-10 font-medium text-slate-700">Write me your queries!</h2>
        <form action="" className=" p-4 w-[400px]">
          <div className="relative mb-6">
            <label
              htmlFor="name"
              className="absolute left-7 -top-3 text-gray-500 z-20 text-xs p-1 bg-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder=" "
              className=" w-full h-12 border-2 bg-none outline-none rounded-lg p-5 z-10"
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="email"
              className="absolute left-7 -top-3 text-gray-500 z-10 text-xs p-1 bg-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder=" "
              className="border-2 w-full h-12 bg-none outline-none rounded-lg p-5 z-10"
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="message"
              className="absolute left-7 -top-3 text-gray-500 z-10 text-xs p-1 bg-white"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder=" "
              className="border-2 w-full h-40 bg-none outline-none rounded-lg p-5 z-10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-slate-700 border-none px-4 py-2 font-medium transition-all rounded hover:bg-slate-600"> Send Message <i class="uil uil-telegram-alt"></i></button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
