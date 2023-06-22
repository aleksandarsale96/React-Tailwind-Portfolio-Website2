import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
    const [work, setWork] = useState(false)
    const hanldeClick = () => setWork(!work)
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aleksandar Milivojevic</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Junior Front-end Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                 I am committed to continuous learning and growth, and I thrive in environments that challenge me to push beyond my current capabilities.
                 While I am proficient in frontend development, my ultimate goal is to expand my skills to include backend development as well.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3' />
                    </Link>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home