import React from 'react';
import './Payment.css'
import { injectStripe } from 'react-stripe-elements';
import { CardElement, Elements } from 'react-stripe-elements';
import { useHistory, useParams } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStateValue } from './StateProvider';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Payment() {
  const history = useHistory()
  const [, dispatch] = useStateValue();

  const { price } = useParams()
  const [open, setOpen] = React.useState(false);
  function CardForm() {

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "PAYMENT_DONE" })
        history.push('/')
      }}>
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
      <h1>Total Bill: {price} $</h1>
      <Elements>
        <CardForm />
      </Elements>
    </div>
  )
}

export default (Payment)