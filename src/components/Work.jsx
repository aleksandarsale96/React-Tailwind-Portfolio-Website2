import React from 'react'
import Binar from '../assets/binar.png'
import Generator from '../assets/generator.png'
import Putea from '../assets/putea.png'
import Pool from '../assets/pool.png'
import Szar from '../assets/szar.png'
import Tsf from '../assets/tsf.png'
import ChatApp from '../assets/chatapp.png'
import Colors from '../assets/colors.png'
import Passwords from '../assets/passwords.png'
import Calculator from '../assets/calculator.png'
import Travel from '../assets/travel.png'
import Todo from '../assets/todo.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work, <a className='text-pink-500' href='https://github.com/salelibertas' target='__blank'>check more</a></p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Binar})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML / CSS / JS / API
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Generator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            DApp
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Putea})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Angular / Less
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Pool})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ember.js
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Szar})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ember.js
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Tsf})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML / CSS / JS / API
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ChatApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React / Firebase v9
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Colors})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Color pallete React
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Passwords})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Password generator React
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Calculator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Calculator
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Travel})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React / Tailwind / Travel
                        </span>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Todo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-10'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React / Tailwind
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work