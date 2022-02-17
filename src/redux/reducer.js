import {ADD_TO_CART,REMOVE_FROM_CART,INCREMENT,DECREMENT} from './type'

export const reducer=(cart=[],action)=>{
   if(action.type===ADD_TO_CART){
        let prod=cart.filter((item)=>item.id===action.payload.id)
        if(prod.length < 1){
            return [...cart,action.payload]
        }else{
            return cart
        }
   }
   if(action.type===REMOVE_FROM_CART){
        return cart.filter((item)=>item.id !== action.payload.id)
   }
   if(action.type===INCREMENT){
        let ditem=cart.filter((item)=>item.id === action.payload.id)
        if(ditem.length > 0){
            return cart.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,quantity:item.quantity + 1}
                }else{
                    return item
                }
            })
        }
   }
   if(action.type===DECREMENT){
        let mitem=cart.filter((item)=>item.id === action.payload.id)
        if(mitem.length > 0){
            return cart.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,quantity:item.quantity - 1}
                }else{
                    return item
                }
            })
        }
   }
   return cart
}