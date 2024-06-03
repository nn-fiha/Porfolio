import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='p-8 mb-20'>
       <h2 className='text-2xl font-bold'>Get in Touch</h2> 
       <span className='text-xs text-gray-500'>My Contact</span>

       <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' placeholder='Insert your name'/>
        </div>
       </form>
    </section>
  )
}

export default Contact