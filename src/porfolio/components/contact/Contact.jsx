
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [state, handleSubmit ] = useForm("mdknprwl");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for reaching out!");
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000);
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [state.succeeded]);
  
  return (
    <section id="contact" className="p-8 md:10 md:mb-20">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-center ml-10 md:ml-0">Get in Touch</h2>
      <span className="text-xs text-gray-500 text-center ml-10 md:ml-0">My Contact</span>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div>
          <h2 className="p-10 text-slate-700 font-medium ml-10 md:ml-0">Hate Form? DM me!</h2>

          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border mb-5 ml-10 md:ml-0"> 
            <i className='bx bx-briefcase-alt text-2xl mb-1'></i>
            <h2 className="text-sm font-medium">Email</h2>
            <h2 className='text-xs text-gray-500 mb-2'>nnfiha2000@gmail.com</h2>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nnfiha2000@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500">
              Write me <i className="bx bx-chevron-right text-lg align-middle"></i>
            </a>
          </div>

          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border mb-5 ml-10 md:ml-0"> 
            <i className='bx bx-briefcase-alt text-2xl mb-1'></i>
            <h2 className="text-sm font-medium">LinkedIn</h2>
            <h2 className='text-xs text-gray-500 mb-2'>nn_fiha</h2>
            <a href="https://www.linkedin.com/in/nnfiha/"><span className='text-xs text-gray-500'>Write me <i className='bx bx-chevron-right text-lg align-middle'></i></span></a>
          </div>

          <div className="max w-auto rounded-lg overflow-hidden shadow-lg px-6 py-3 border ml-10 md:ml-0 "> 
            <i className='bx bxl-messenger text-2xl mb-1'></i>
            <h2 className="text-sm font-medium">Messenger</h2>
            <h2 className='text-xs text-gray-500 mb-2'>nnfiha</h2>
            <a href="https://www.facebook.com/nnfiha"><span className='text-xs text-gray-500'>Write me <i className='bx bx-chevron-right text-lg align-middle'></i></span></a>
          </div>
        </div>

        <div>
          <h2 className="p-10 font-medium text-slate-700 ml-10 md:ml-0">Write me your queries!</h2>
          <form onSubmit={handleSubmit} className="ml-3 md:ml-0 md:p-4 w-full md:w-[400px]">
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
                className="w-full h-12 border-2 bg-none outline-none rounded-lg p-5 z-10"
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
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
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
                className="border-2 w-full h-40 bg-none outline-none rounded-lg p-5 z-10"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className={`relative mt-5 text-white bg-slate-700 border-none px-6 py-3 font-medium transition-transform duration-300 ease-in-out rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${state.submitting ? 'opacity-50 cursor-wait' : ''}`}
            >
              <span className="flex items-center justify-center">
                {state.submitting ? (
                  <svg className="w-5 h-5 mr-3 animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22a10 10 0 0 0 0-20v2a8 8 0 0 1 0 16v2z"></path>
                  </svg>
                ) : (
                  <i className="uil uil-telegram-alt text-lg"></i>
                )}
                <span className="ml-2">Send Message</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
