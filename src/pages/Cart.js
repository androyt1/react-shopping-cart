import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { increase ,decrease,remove} from '../redux/action'

const Cart = () => {
  const navigate = useNavigate()
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
        {total < 1 ? (
          <>
          <span className='text-md font-bold uppercase text-slate-600'>Cart is Empty</span>
          <div className='w-full text-center '>
                   <button className=' bg-slate-700 text-white font-serif font-bold text-sm py-3 px-3 my-5 rounded-md shadow-lg' onClick={()=>{navigate("/products")}}>Continue Shopping</button>
             </div>   
          </>
        ):(
          <div className='flex flex-col justify-center items-center'>
            <span className='text-md font-bold uppercase  text-slate-600'>Total : {total}</span>
            <button className='px-3 mt-3 text-md font-bold font-serif  bg-[#FA0D3D] text-white showdow-sm py-2 hover:bg-slate-300  transition-all duration-700 ease-linear'>Proceed to Checkout</button>
          </div>
        )}
    </div>
    <div className=' w-full  px-3 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
      {cart.map((item,key)=>{
        return (
          <div key={key}>
         <div  className='flex flex-col justify-center items-center mb-8  py-4 shadow-sm'>
         <span className='text-sm font-serif font-semibold py-3'>{item.name}</span>
         <div key={item.id} className='flex flex-row justify-center items-center '>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              
              <img src={item.image} alt="" />             
            </div>
          <div className='flex-flex-col justify-center items-center w-full'>
          <div className='flex  justify-around items-start  w-full  py-3 min-h-[10vh] '>
              <button className=' bg-[#FA0D3D] text-white px-2 py-2 rounded-md text-sm mb-2 shadow-md font-bold' onClick={()=>dispatch(increase(item))}>+</button>
              <button className=' bg-[#FA0D3D] text-white px-2 py-2 rounded-md  text-sm mb-2 shadow-md font-bold' onClick={()=>{
                       if(item.quantity>1){
                           dispatch(decrease(item))
                       }else{
                            dispatch(remove(item))
                       }
                   }}>-</button>
              <button className=' bg-[#FA0D3D] text-white px-2 py-2 rounded-md text-sm mb-2 shadow-md font-bold' onClick={()=>dispatch(remove(item))}>Remove</button>
            </div>
            <div className='w-full flex flex-col justify-center items-center px-3'>
            <span className='text-sm font-semibold font-serif'>Price {item.price}</span>           
              <span className='text-sm font-semibold font-serif'>Quantity {item.quantity}</span>
              <span className='text-sm font-semibold font-serif'>Amount {item.price * item.quantity}</span>
            </div>
          </div>
          </div>
           </div>                 
          </div>         
        ) 
      })}
    </div>
    <div className='w-full text-center '>
                   <button className=' bg-[#FA0D3D] text-white font-serif font-bold text-sm py-3 px-3 my-5 rounded-md shadow-lg' onClick={()=>{navigate("/products")}}>Continue Shopping</button>
             </div>   
   </>
  )
}

export default Cart