import React, { useState } from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product(props) {
    const [{} , dispatch] = useStateValue()
    
    const addToBasket =()=>
    {
        
        dispatch({
            type:"ADD_TO_BASKET",
            item:{...props}

        })
    }
    return (
        <div className="product">
            <div className="product_info">
            <p>{props.title}</p>
            <p className="product_price">{props.price}</p>
            <div className="product_rating">
                {
                    Array(props.rating)
                    .fill()
                    .map((_) => (<span>⭐</span>))
                    }
            </div>
            
            

           </div> 
           
            <img alt="" src={props.image} />
            <button onClick={addToBasket}>Add to Basket </button>  
        </div>
    )
}

export default Product
