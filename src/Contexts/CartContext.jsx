import { createContext, useState } from "react";

export const CartContext=createContext(null);
export const CartContextProvider=({children})=>{
    const[cartCount,setCartCount]=useState(0)
   return(
    <>

   <CartContext.Provider value={{cartCount,setCartCount}}>
      {children}
   </CartContext.Provider>
   </>
   )
}