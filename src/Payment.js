import React from 'react';
import './Payment.css'
import {injectStripe} from 'react-stripe-elements';
import {CardElement  ,Elements} from 'react-stripe-elements';
import { useHistory, useParams } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  function Payment() {
    const history = useHistory()
    
    const {price} = useParams()
    const [open, setOpen] = React.useState(false);
  function CardForm(){
      
      return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target)
            const a  = document.getElementsByClassName('StripeElement StripeElement--complete');
            // console.log(a[0].length);

            if(a[0]!=undefined)
            history.push('/')
            else{
              setOpen(true);
            console.log("Invalid")
            }
            
            // history.push('/')
            
          }}>
          <CardElement />
          <button className="checkout_button">Pay</button>
        </form>
      )
  }


      

      const handleClick = () => {
          setOpen(true);
        };
  
  
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };
      return (
        <div className="Checkout">
          <h1>Bill: {price} dollars</h1>
          <Elements>
            <CardForm />
          </Elements>
          <Snackbar anchorOrigin={{vertical:'bottom',horizontal: 'right' }} open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
         Invalid Card Details
        </Alert>
      </Snackbar>
        </div>
      )
  }
  
  export default (Payment)