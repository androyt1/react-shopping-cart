import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
  return (
    <>
        <header className='w-full px-3 h-[100vh] flex flex-col justify-center items-center bg-[#fcde67]'>
            <div className='w-full h-[100vh] flex flex-col justify-center items-center text-center '>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-[#030212] font-serif'>The Clothes Shop</h1>
            <h3 className='text-xl md:text-3xl mt-4 tracking-wider font-semibold text-[#030212]'>Lorem ipsum dolor sit amet</h3>
            <p className='md:w-3/4 mt-10 text-sm tracking-widest text-[#0e0e11]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore fuga accusamus amet harum molestiae vel. Vel explicabo libero corrupti asperiores error sed, magni iste commodi nesciunt nobis, perspiciatis perferendis.</p>

            <button className='mt-20 w-2/3 md:w-1/3 border-2 border-zinc-500 shadow-xl hover:text-white font-semibold px-3 py-4 outline-1 rounded-md drop-shadow-lg bg-slate-500 text-slate-50 transition-all duration-700 ease-linear' onClick={()=>{navigate('/products')}}>Start Shopping</button>
            </div>
        </header>
    </> 
  )
}

export default Home