import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
  return (
    <>
        <header className='w-full px-3 h-[100vh] flex flex-col justify-center items-center bg-[#fcde67]' style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.1)),url(/images/bg2.jpg)",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className='w-full h-[100vh] flex flex-col justify-center items-center text-center '>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-[#f8dab1] font-serif'>The Clothes Shop</h1>
            <h3 className='text-xl md:text-3xl mt-4 tracking-wider font-semibold text-[#e1e3e4]'>Lorem ipsum dolor sit amet</h3>
            <p className='md:w-3/4 lg:w-3/5 mt-10 text-sm tracking-widest text-[#fff] md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore fuga accusamus amet harum molestiae vel. Vel explicabo libero corrupti asperiores error sed, magni iste commodi nesciunt nobis, perspiciatis perferendis.</p>

            <button className='mt-20 w-2/3 md:w-1/3 rounded-xl shadow-xl hover:text-white font-semibold px-3 py-4 outline-1  drop-shadow-lg bg-[#FA0D3D] text-slate-50 transition-all duration-700 ease-linear' onClick={()=>{navigate('/products')}}>Start Shopping</button>
            </div>
        </header>
    </> 
  )
}

export default Home