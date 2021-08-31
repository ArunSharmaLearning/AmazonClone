import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import axios from "axios"
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  
  function isObj(val) {
    return typeof val === 'object'
  }
  
   function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  


function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
   function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }




function Subtotal() {
    const [{ user , basket} , dispatch] = useStateValue();
    const history  = useHistory()
    const basketTotal = () =>{
    return(basket.reduce((amount , item)=> item.price*item.quantity + amount , 0))}

    const payment =(e)=>
    {
        e.preventDefault();
        if(!user)
        {
            history.push('/login');
            return
        }
        history.push(`/payment/${basketTotal()}`)
      }

    return (
        <form className="subtotal">
            {
                <p name="amount">Subtotal ({basket.length}) items: {basketTotal()} dollars</p>               
            }
            <Button onClick={payment}>Proceed to checkout</Button>
            
        </form>
    )
}

export default Subtotal
