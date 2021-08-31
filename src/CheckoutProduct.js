
import React ,{useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"
import Button from '@material-ui/core/Button';

function CheckoutProduct(props) {
    const [{basket} , dispatch] = useStateValue()
    const [num , setnum] = useState(props.item.quantity)
    const history = useHistory()

    
    useEffect(()=>
    {   
        setnum(props.item.quantity)

    },[basket])
    useEffect(() => {
            dispatch(
                {
                    type:"QUANTITY",
                    id:props.item.id,
                    value:num
                }
            )


        }, [num])

        
    
        const val=(e)=>
        {
            
                if(e.target.value < 1 && e.target.value !== ""){ return (1) }  else {(setnum(e.target.value))}

        
        }
        
        
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
                        <Button onClick={()=> props.remove(props.item.id)}>Remove</Button>
            </div>

            
        </div>
    )
}

export default CheckoutProduct
