import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Cart = () => {
  const cart=useSelector(state=>state)
  const dispatch=useDispatch()

  const addition=(acc,currentValue)=>{
      return acc + currentValue.quantity * currentValue.price
  }
  const total=cart.reduce(addition,0)

  return (
   <>
     <header>
        <div className='w-full mt-10 px-3 h-[15vh] flex flex-col justify-end items-center '>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-slate-800 mb-5'>Cart</h2>
        </div>
    </header>
    <div className='text-center py-4'>
        {total < 1 ? <span className='text-md font-bold uppercase text-slate-600'>Cart is Empty</span>:(
          <div className='flex flex-col justify-center items-center'>
            <span className='text-md font-bold uppercase  text-slate-600'>Total : {total}</span>
            <button className='px-3 mt-3 text-md font-bold font-serif border-2 border-slate-200 showdow-sm py-2 hover:bg-slate-300  transition-all duration-700 ease-linear'>Proceed to Checkout</button>
          </div>
        )}
    </div>
    <div className=' w-full border-2 border-zinc-300 min-h-[85vh] px-3 py-3 flex flex-col justify-start items-center '>
      {cart.map(item=>{
        return (
          <>
         <div className='flex flex-col justify-center items-center mb-8 border-2 border-slate-100 py-4 shadow-sm'>
         <span className='text-sm font-serif font-semibold py-3'>{item.name}</span>
         <div key={item.id} className='flex flex-row justify-center items-center '>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              
              <img src={item.image} alt="" />             
            </div>
          <div className='flex-flex-col justify-center items-center w-full'>
          <div className='flex  justify-around items-start  w-full  py-3 min-h-[10vh] '>
              <button className='border-2 border-zinc-300 px-2 py-2 rounded-md text-sm mb-2 shadow-md font-bold' onClick={()=>dispatch({type:"INCREMENT",payload:item})}>+</button>
              <button className='border-2 border-zinc-300 px-2 py-2 rounded-md  text-sm mb-2 shadow-md font-bold' onClick={()=>{
                       if(item.quantity>1){
                           dispatch({type:"DECREMENT",payload:item})
                       }else{
                            dispatch({type:"REMOVE_FROM_CART",payload:item})
                       }
                   }}>-</button>
              <button className='border-2 border-zinc-300 px-2 py-2 rounded-md text-sm mb-2 shadow-md font-bold' onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}>Remove</button>
            </div>
            <div className='w-full flex flex-col justify-center items-center px-3'>
            <span className='text-sm font-semibold font-serif'>Price {item.price}</span>           
              <span className='text-sm font-semibold font-serif'>Quantity {item.quantity}</span>
              <span className='text-sm font-semibold font-serif'>Amount {item.price * item.quantity}</span>
            </div>
          </div>
          </div>
           </div>          
          </>         
        ) 
      })}
    </div>
   
   </>
  )
}

export default Cart