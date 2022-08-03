import React, { useState } from 'react'
import "./Home.css"
import Product from "./Product"
import data from './data'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useStateValue } from './StateProvider'



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function Home() {
  const [{ search }] = useStateValue()
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    setOpen(false);
  };



  function renderProduct(val, index) {
    if (search !== "" && val.title.toLowerCase().indexOf(search.searc.toLowerCase()) === -1)
      return null
    else {
      return (
        <Product key={index} handleClick={handleClick} {...val} />)
    }

  }
  function count(data) {
    let cnt = 0;
    data.map((val) => {
      if (search !== "" && val.title.toLowerCase().indexOf(search.searc.toLowerCase()) === -1) {
      }
      else {
        cnt += 1;
      }
    })

    if (cnt > 0)
      return 1
    else
      return 0
  }
  return (
    <div className="home">

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Add to Cart
        </Alert>
      </Snackbar>


      <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/AugART/Xiaomi/MiFamily/Updated/DesktopHero_1500x600._CB408800062_.jpg"
        alt="home" />

      <div className="home_row">
        {
          count(data) == 0 ?
            <h1>Nothing Found !!</h1>
            :
            data.map((val , index) => (renderProduct(val , index)))}

      </div>

    </div>
  )
}
export default Home

