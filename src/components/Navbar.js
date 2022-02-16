import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cart=useSelector(state=>state)
    const count=cart.length
    const [open, setopen] = useState(false);

    const toggleMenu=()=>{
        setopen(!open);
    }
    const closeMenu=()=>{
        setopen(false);
    }  
   
    const[scroll,setScroll]=useState(false)

    const handleScroll=()=>{
        if(window.scrollY>70){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    window.addEventListener('scroll',handleScroll)

  return (
    <>    
    <nav className={`flex justify-between items-center w-full px-3 h-[70px] bg-transparent fixed top-0 transition-all duration-1000 ease-linear z-20 ${scroll ? 'bg-slate-400':'bg-transparent'}`}>
        <div onClick={()=>closeMenu()}><span className={`text-md md:text-2xl font-bold font-serif transition-all duration-700 ease-linear ${scroll ?'text-white':'text-slate-800'}`}><Link to="/">WeClothe</Link></span></div>
        <ul className='hidden md:flex'>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/'>Home</Link></li>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/about'>About</Link></li>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/products'>Products</Link></li>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/contact'>Contact</Link></li>
           <div className=''>
               <Link to="/cart" className='flex justify-center items-center ml-4'>
               <span className='px-2 bg-slate-800 text-white'>{cart.length}</span>
                <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}/>
               </Link>
           </div>
          
        </ul> 
       <div className='flex justify-center items-center md:hidden'>     

<div className='mr-2 ' onClick={()=>closeMenu()}>
       <Link to="/cart" className='flex justify-center items-center '>
       <span className='px-2 bg-slate-800 text-white'>{cart.length}</span>
        <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':'text-slate-800 '}`}/>
       </Link>
   </div>
   {open ? <AiOutlineClose onClick={()=>toggleMenu()} className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-800'}`} />:<AiOutlineMenu className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-800'}`} onClick={()=>toggleMenu()}/>}
       </div>
    </nav>
    
    <nav className={`flex flex-col justify-center items-center md:hidden w-[50vw] fixed top-[70px] h-[calc(100vh-70px)] bg-blue-500 z-10 right-0 transition-all duration-700 ease-linear ${open ? 'translate-x-0':'translate-x-[100vw]'}`}>
        <ul>
            <li className='text-blue-100 mb-2' onClick={()=>closeMenu()}><Link to='/'>Home</Link></li>
            <li className='text-blue-100 mb-2' onClick={()=>closeMenu()}><Link to='/about'>About</Link></li>
            <li className='text-blue-100 mb-2' onClick={()=>closeMenu()}><Link to='/products'>Products</Link></li>
            <li className='text-blue-100 mb-2' onClick={()=>closeMenu()}><Link to='/contact'>Contact</Link></li>
           
        </ul>
    </nav>   
    </>
  )
}

export default Navbar