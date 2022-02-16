import React from 'react'
import { useParams } from "react-router-dom";
import { data } from '../Data';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Details = () => {
    const dispatch = useDispatch()

    const navigate=useNavigate();
    let params = useParams();
    let id = parseInt(params.id);
    const item = data.find(item => item.id === id);  

  return (
    <>
     <header>
        <div className='w-full mt-10 px-3 h-[15vh] flex flex-col justify-end items-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-slate-800 mb-5'>Details</h2>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full h-full '>
                <img src={item.image} alt="" className="w-full h-full mt-8" />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center  px-4 py-3'>
                <h3 className='text-xl font-semibold font-serif'>{item.name}</h3>
                <p className='font-serif font-semibold py-3'>Price: {item.price}</p>
                <p className='font-serif font-semibold'>Category: {item.category}</p>
                <span className='block font-semibold font-serif mt-1'>Description</span>
                <p className='text-sm italic text-center'>{item.description}</p>
                <div className="flex justify-center items-center">
                 <span className='text-sm font-semibold font-serif'>Rating &nbsp; </span> <ReactStars
                    count={item.rating}                   
                    size={24}
                    activeColor="#ffd700"    
                  />                   
                  </div>
                  <div className='block flex justify-center items-center py-2'>  
                    <span className='font-bold font-serif'>Available Colors</span> 
                    {item.colors.map(color=>{
                      return <span className='text-sm font-semibold italic ml-3'>{color}</span>
                    })}
                  </div>  
                  <p className='font-serif font-semibold mt-1'>Number of Reviews {item.numReviews}</p>
                  <p className='font-serif font-semibold mt-1'>Instock {item.numInStock > 1 ? <span className='text-green-600'>Available</span>: <span className='text-red-600'>Out of Stock</span>}</p>
                  
                  <div className='w-full mt-4 flex flex-col rounded-md justify-center items-center'>
                  <button className='py-2 px-3  border-2 border-zinc-200 shadow-md mb-5 drop-shadow-xl hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-700 ease-linear rounded-sm ont-serif font-bold text-sm' onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>Add to Cart</button>

                  <button onClick={()=>{navigate("/products")}} className='py-2 px-3 shadow-md  border-2 border-zinc-200 mb-5 rounded-md drop-shadow-xl hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-700 ease-linear font-serif font-bold text-sm' >Continue Shopping</button>
                  </div>

                 
            </div>
        </div>
    </header>
    </>
  )
}

export default Details