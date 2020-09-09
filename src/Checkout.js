import React from 'react'
import { useStateValue } from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">

        
            <img className="checkout_ad" src="https://i.pinimg.com/originals/e9/c5/6a/e9c56a9cb76ff557a8568234e9333a7a.png" alt="" />

         {basket.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                </div>

         ) : (<div>
             <h2 className="checkout_title" >Your Basket </h2>
                 {
                     basket.map(item => {
                       
                        return(
                         <CheckoutProduct item={item}/>)
                     })
                 }
             
         </div>)}
         </div>
         {basket.length>0 && (
             <div className="checkout_right">
                 <Subtotal/>
             </div>
         )}
        </div>
    )
}

export default Checkout
