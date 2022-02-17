import {ADD_TO_CART,REMOVE_FROM_CART,INCREMENT,DECREMENT} from './type'


export const add=(item)=>{
   return {
       type:ADD_TO_CART,
       payload:item
   } 
}

export const remove=(item)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:item
    }
}
 
export const increase=(item)=>{
    return {
        type:INCREMENT,  
        payload:item
    }
}

export const decrease=(item)=>{
    return {
        type:DECREMENT,
        payload:item
    }
}