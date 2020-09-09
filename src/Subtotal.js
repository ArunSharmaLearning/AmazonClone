import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import axios from "axios"
function Subtotal() {
    const [{basket} , dispatch] = useStateValue();
    const basketTotal = () =>{
    return(basket.reduce((amount , item)=> item.price*item.quantity + amount , 0))}

    const payment =()=>
    {
        axios.get('http://localhost:4000/paywithpaytm' , {amount: basketTotal})
        .then(()=>console.log("I m here"))
    }

    return (
        <form className="subtotal" method="get" action='http://localhost:4000/paywithpaytm'>
            {
                <p name="amount">Subtotal ({basket.length}) items: {basketTotal()} dollars</p>               
            }
            <button onSubmit={payment}>Proceed to checkout</button>
            
        </form>
    )
}

export default Subtotal
