import React,{useState} from "react";
import { data } from "../Data";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {add} from '../redux/action'
import { BsSearch } from "react-icons/bs";
const Products = () => {

    const[search,setSearch]=useState('')
    
    const cart=useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(cart)

  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="w-full px-3 h-[15vh] flex flex-col justify-end items-center  mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-slate-800 mb-5">
            Products
          </h2>
        </div>
      </header>
      <div className='flex justify-center items-center w-full py-6 px-8'>
            <input type="text" className={`px-3 py-2 border-2 border-slate-300 focus:outline-none mr-2 w-full md:w-1/2 transition-all duration-700 ease-linear `} placeholder='Search Clothes' onChange={(event)=>{setSearch(event.target.value)}}/>

            <BsSearch className={`text-xl md:text-3xl cursor-pointer font-bold  ml-2 transition-all duration-700 ease-linear `}/>
        </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 bg-[#fcde67]"> 
        {data.filter(product => product.name.toLowerCase().includes(search.toLowerCase())).map((item,key) => {
          item.quantity = 1;
          return (
            <div key={key}>
              <div  className="w-full flex flex-col justify-center items-center px-3 shadow-sm border-2 border-zinc-200 py-3 bg-white" >
                <span className="block py-2 font-serif font-bold text-sm">{item.name}</span>
                <img src={item.image} alt="" className="cursor-pointer" onClick={()=>{navigate(`/details/${item.id}`)}} />
                <span className="italic text-md text-blue-600 py-2">
                  Price: {item.price}
                </span>
                <span className="font-serif font-bold text-sm">Category {item.category}</span>
                <div className="flex justify-center items-center">
                 
                  <ReactStars 
                    count={item.rating}                   
                    size={24}
                    activeColor="#ffd700"
                  />                  
                </div>
                <button className="py-2 px-2 rounded-md  bg-slate-600 text-white mb-3  drop-shadow-xl text-sm mt-4 ont-serif font-bold " onClick={()=>dispatch(add(item))}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
