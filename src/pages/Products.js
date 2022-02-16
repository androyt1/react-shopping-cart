import React from "react";
import { data } from "../Data";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Products = () => {

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
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 bg-slate-200">
        {data.map((item) => {
          item.quantity = 1;
          return (
            <>
              <div key={item.id} className="w-full flex flex-col justify-center items-center px-3 shadow-sm border-2 border-zinc-200 py-3 bg-white" key={item.id}>
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
                <button className="py-2 px-2 rounded-md  border-2 border-slate-200 mb-3  drop-shadow-xl text-sm mt-4 ont-serif font-bold " onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;