import React ,{useState , useEffect} from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"
function CheckoutProduct(props) {
    const [{basket} , dispatch] = useStateValue()
    const [num , setnum] = useState(props.item.quantity)
    console.log(basket)
    const removefromBasket= () =>
        {
            
            dispatch(
                {
                    type:"REMOVE_FROM_BASKET",
                    id:props.item.id

                }
            )
        }

        const val=(e)=>
        {
                if(e.target.value < 1 && e.target.value !== ""){ return (1) }  else { return(setnum(e.target.value))}

           
        }
        useEffect(() => {
            
            dispatch(
                {
                    type:"QUANTITY",
                    id:props.item.id,
                    value:num
                }
            )


        }, [num])
        
        
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={props.item.image} alt=""/>
            
            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title">{props.item.title}</p>
                <p className="checkoutProduct_price">
                    <strong> {props.item.price} </strong>
                    <strong>dollars</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        {
                            Array(props.item.rating).fill()
                            .map(() => (<span>⭐</span>))
                        }
                        </div>
                        <div>
                            <div className="checkoutProduct_qnt">
                            <span>Quantiity:</span>
                        <input type="number" value={num} onChange={val}/>
                        
                            </div>
                        </div>
                        <button onClick={removefromBasket}>Remove</button>
            </div>

            
        </div>
    )
}

export default CheckoutProduct
