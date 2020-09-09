import React from 'react'
import "./Home.css"
import Product from "./Product"
import data from './data'
import {useStateValue} from './StateProvider'
function Home() {
    const [{search}]= useStateValue()
    

    function renderProduct(val)
    {
        if(search!=="" && val.title.toLowerCase().indexOf(search.searc.toLowerCase()) === -1)
        return null
        else
        return(
        <Product {...val} />)

    }
    return (
        <div className="home">
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

