import React from 'react'

const About = () => {
  return (
    <header>
        <div className='w-full mt-10 px-3 h-[15vh] flex flex-col justify-end items-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-slate-800 mb-5'>About Us</h2>
        </div>
        <div className='w-full px-3 flex flex-col justify-center items-center text-center mt-10'>
            <h3 className='text-xl font-semibold '>Lorem ipsum</h3>
            <p className='md:w-3/4 mt-2 text-zinc-600 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id unde cumque voluptas asperiores, alias qui! Suscipit, nostrum praesentium cupiditate, dolor nulla aut, sint sequi minima ducimus totam temporibus cumque nam.</p>
        </div>
    </header>
  )
}

export default About 