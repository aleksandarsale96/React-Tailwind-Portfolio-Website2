import React from 'react'

import Firebase from '../assets/firebase.png'
import Vue from '../assets/vue.png'
import Aws from '../assets/aws.png'
import Ts from '../assets/ts.png'











const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Learning</p>
                <p className='py-4'>// These are the technologies I'm learning right now</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="HTML icon" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Vue} alt="CSS icon" />
                    <p className='my-4'>Vue</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Aws} alt="JavaScript icon" />
                    <p className='my-4'>Aws</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Ts} alt="React icon" />
                    <p className='my-4'>Typescript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills