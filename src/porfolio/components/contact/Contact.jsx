import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='p-8 mb-20'>
      <h2 className='text-2xl font-bold'>Get in Touch</h2> 
      <span className='text-xs text-gray-500'>My Contact</span>

      <form action="" className='mt-10 border p-4 w-96'>
        <div className='relative mb-6 h-16'>
        
          <input type="text" name='name' placeholder=' ' className='absolute top-0 left-0 w-full h-full border-2 bg-none outline-none rounded-xl p-5 z-10'/>
          <label htmlFor="name" className='absolute left-5 -top-7 text-gray-500 z-20 text-xs p-1 bg-white'>Name</label>
        </div>
        <div className='relative mb-6'>
          <label htmlFor="email" className='absolute left-5 -top-7 text-gray-500 z-10 text-xs p-1 bg-white'>Email</label>
          <input type="email" name='email' placeholder=' ' className='border w-full p-2 peer'/>
          
        </div>
        <div className='relative mb-6'>
        <label htmlFor="message" className='absolute left-5 -top-7 text-gray-500 z-10 text-xs p-1 bg-white'>Message</label>
          <textarea name='message' placeholder=' ' className='border w-full p-2 h-32 peer'></textarea>
          
        </div>
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Submit</button>
      </form>
    </section>
  )
}

export default Contact