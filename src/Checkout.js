import React from 'react'
import { useStateValue } from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';





function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    const removefromBasket = (props) => {

        handleClick();

        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: props

            }

        )
    }



    return (
        <div className="checkout">

            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose}>
                    Remove from Cart
                </Alert>
            </Snackbar>


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

                            return (
                                <CheckoutProduct remove={removefromBasket} item={item} />)
                        })
                    }

                </div>)}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
