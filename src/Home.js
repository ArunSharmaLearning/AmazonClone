import React from 'react'
import "./Home.css"
import Product from "./Product"
import data from './data'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {useStateValue} from './StateProvider'



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }



function Home() {
    const [{search}]= useStateValue()
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

      

    function renderProduct(val)
    {
        if(search!=="" && val.title.toLowerCase().indexOf(search.searc.toLowerCase()) === -1)
        return null
        else
        return(
        <Product handleClick={handleClick} {...val} />)

    }
    return (
        <div className="home">

<Snackbar anchorOrigin={{vertical:'bottom',horizontal: 'right' }} open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
         Add to Cart
        </Alert>
      </Snackbar>


            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/AugART/Xiaomi/MiFamily/Updated/DesktopHero_1500x600._CB408800062_.jpg" 
            alt="home" />

            <div className="home_row">
            {data.map((val)=>
            {
            return(
               
                renderProduct(val)
            
            )})}

            </div>

            
        </div>
    )
}
export default Home

