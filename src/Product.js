import React, { useState } from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Product(props) {
    const [{} , dispatch] = useStateValue()

    

    
    
    const addToBasket =()=>
    {
        
        props.handleClick()
        dispatch({
            type:"ADD_TO_BASKET",
            item:{...props}

        })
    }
    return (
        <div className="product">


            <div className="product_info">
            <p>{props.title}</p>
            <p className="product_price">{props.price} $</p>
            <div className="product_rating">
                {
                    Array(props.rating)
                    .fill()
                    .map((_) => (<span>⭐</span>))
                    }
            </div>
            
            

           </div> 
           
            <img alt="" src={props.image} />
            <Button onClick={addToBasket}>Add to Basket </Button>  
        </div>
    )
}

export default Product
