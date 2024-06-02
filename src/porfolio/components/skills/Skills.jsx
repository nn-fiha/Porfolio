import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
import Language from './Language'

const Skills = () => {
  return (
    <section id='skills' className='p-8 mb-20'>
       <h2 className='text-2xl font-bold'>Skills</h2> 
       <span className='text-xs text-gray-500'>My Technical Level</span>
       <div className='flex flex-col justify-center items-center gap-8 mt-10'>
        <Frontend />
        <Backend />
        <Language />
        <Tools/>
        </div>
    </section>
  )
}

export default Skills