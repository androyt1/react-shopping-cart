import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
        <header className='w-full px-3 h-[calc(100vh-70px)] flex flex-col justify-center items-center bg-zinc-200'>
            <div className='w-full flex flex-col justify-center items-center text-center '>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-slate-800 font-serif'>The Clothes Shop</h1>
            <h3 className='text-xl md:text-3xl mt-4 tracking-wider font-semibold text-slate-800'>Lorem ipsum dolor sit amet</h3>
            <p className='md:w-3/4 mt-10 text-sm tracking-widest text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore fuga accusamus amet harum molestiae vel. Vel explicabo libero corrupti asperiores error sed, magni iste commodi nesciunt nobis, perspiciatis perferendis.</p>

            <button className='mt-10 w-2/3 md:w-1/3 bg-blue-600 text-white font-semibold px-3 py-3 rounded-md drop-shadow-lg' onClick={()=>{navigate('/products')}}>Start Shopping</button>
            </div>
        </header>
    </> 
  )
}

export default Home