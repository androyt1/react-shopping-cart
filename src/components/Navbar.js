import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { BsSearch } from "react-icons/bs";

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
    <nav className={`flex justify-between items-center w-full px-3 h-[70px] bg-transparent fixed top-0 transition-all duration-1000 ease-linear z-20 ${scroll ? 'bg-slate-800':'bg-transparent'}`}>
        <div onClick={()=>closeMenu()}><span className={`text-xl md:text-2xl font-bold font-serif transition-all duration-700 ease-linear ${scroll ?'text-white':'text-slate-900'}`}><Link to="/">Klot</Link></span></div>

        <div className='flex justify-center items-center w-full ml-3 mr-3'>
            <input type="text" className={`px-3 py-2  focus:outline-none mr-2 w-full md:w-1/2 transition-all duration-700 ease-linear ${scroll ? '':'shadow-md'}`} placeholder='Search Clothes' />
            <BsSearch className={`text-xl md:text-3xl cursor-pointer font-bold  ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':'text-slate-600'}`}/>
        </div>


        <ul className='hidden md:flex'>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/'>Home</Link></li>
           
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}><Link to='/products'>Products</Link></li>
           
           <div className=''>
               <Link to="/cart" className='flex justify-center items-center ml-4'>
               <span className={`px-2 transition-all duration-700 ease-linear  ${scroll ? 'bg-white text-slate-700':' bg-slate-800 text-white'}`}>{cart.length}</span>
                <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-800'}`}/>
               </Link>
           </div>
          
        </ul> 
       <div className='flex justify-center items-center md:hidden'>     

<div className='mr-2 ' onClick={()=>closeMenu()}>
       <Link to="/cart" className='flex justify-center items-center '>
       <span className={`px-2 transition-all duration-700 ease-linear  ${scroll ? 'bg-white text-slate-700':' bg-slate-800 text-white'}`}>{cart.length}</span>
        <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':'text-slate-800 '}`}/>
       </Link>
   </div>
   {open ? <AiOutlineClose onClick={()=>toggleMenu()} className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-800'}`} />:<AiOutlineMenu className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-800'}`} onClick={()=>toggleMenu()}/>}
       </div>
    </nav>
    
    <nav className={`flex flex-col justify-center items-center md:hidden w-[50vw] fixed top-[70px] h-[calc(100vh-70px)] bg-slate-800 z-10 right-0 transition-all duration-700 ease-linear ${open ? 'translate-x-0':'translate-x-[100vw]'}`}>
        <ul>
            <li className='text-blue-100 mb-4 block hover:bg-slate-500 w-full px-3 py-2 transition-all duration-700 ease-linear' onClick={()=>closeMenu()}><Link to='/'>Home</Link></li>
            
            <li className='text-blue-100 mb-4 block hover:bg-slate-500 w-full px-3 py-2 transition-all duration-700 ease-linear' onClick={()=>closeMenu()}><Link to='/products'>Products</Link></li>
           
           
        </ul>
    </nav>   
    </>
  )
}

export default Navbar