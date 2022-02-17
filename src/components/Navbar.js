import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { GiShirt} from "react-icons/gi";


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
    <nav className={`flex justify-between items-center w-full px-3 h-[70px] bg-transparent fixed top-0 transition-all duration-1000 ease-linear z-20 ${scroll ? 'bg-[#FA0D3D]':'bg-[#fa0d3c94]'}`}>
        
        <div onClick={()=>closeMenu()} className='flex flex-row justify-center items-center'><span className={`text-xl md:text-2xl font-bold font-serif transition-all duration-700 ease-linear  ${scroll ?'text-white':'text-slate-50'}`}><Link to="/" className=' flex flex-row justify-center items-center'>Klot  <GiShirt className='text-3xl ml-2 text-white'/></Link></span> 
        </div>

        


        <ul className='hidden md:flex'>
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-50'}`}><Link to='/'>Home</Link></li>
           
            <li className={`ml-2 transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-50'}`}><Link to='/products'>Products</Link></li>
           
           <div className=''>
               <Link to="/cart" className='flex justify-center items-center ml-4'>
               <span className={`px-2 transition-all duration-700 ease-linear  ${scroll ? 'bg-white text-slate-700':' bg-slate-50 text-slate-600'}`}>{cart.length}</span>
                <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':' text-slate-50'}`}/>
               </Link>
           </div>
          
        </ul> 
       <div className='flex justify-center items-center md:hidden'>     

<div className='mr-2 ' onClick={()=>closeMenu()}>
       <Link to="/cart" className='flex justify-center items-center '>
       <span className={`px-2 transition-all duration-700 ease-linear  ${scroll ? 'bg-white text-slate-700':' bg-slate-800 text-white'}`}>{cart.length}</span>
        <AiOutlineShoppingCart className={`text-3xl transition-all duration-700 ease-linear ${scroll ? 'text-white':'text-slate-50 '}`}/>
       </Link>
   </div>
   {open ? <AiOutlineClose onClick={()=>toggleMenu()} className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-50'}`} />:<AiOutlineMenu className={`text-3xl  cursor-pointer transition-all duration-700 ease-linear md:hidden  ${scroll ? 'text-white':'text-slate-50'}`} onClick={()=>toggleMenu()}/>}
       </div>
    </nav>
    
    <nav className={`flex flex-col justify-center items-center md:hidden w-[50vw] fixed top-[70px] h-[calc(100vh-70px)] bg-[#94102ac7] z-10 right-0 transition-all duration-700 ease-linear ${open ? 'translate-x-0':'translate-x-[100vw]'}`}>
        <ul>
            <li className='text-blue-100 mb-4 block hover:bg-slate-500 w-full px-3 py-2 transition-all duration-700 ease-linear' onClick={()=>closeMenu()}><Link to='/'>Home</Link></li>
            
            <li className='text-blue-100 mb-4 block hover:bg-slate-500 w-full px-3 py-2 transition-all duration-700 ease-linear' onClick={()=>closeMenu()}><Link to='/products'>Products</Link></li>
           
           
        </ul>
    </nav>   
    </>
  )
}

export default Navbar