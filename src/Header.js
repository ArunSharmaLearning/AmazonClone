import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
function Header() {

    const [{ basket, user, search }, dispatch] = useStateValue()
    const [searc, setsearc] = useState("")
    const search_ref = useRef();

    useEffect(() => {
        search_ref.current.focus();
        dispatch({
            type: "ADD_TO_SEARCH",
            search: { searc }

        })
    }, [searc])

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="OP" />
            </Link>


            <div className="header_search">
                <input ref={search_ref} type="text" value={searc} onChange={(e) => setsearc(e.target.value)} className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={user => { if (user) auth.signOut() }} className="header_option">
                        <span className="header_optionLineOne">Hello,{user?.email}</span>
                        <span className="header_optionLineTwo">{!user ? "Sign In" : "Sign out"}</span>
                    </div>
                </Link>



                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>

                </Link>
            </div>

        </nav>
    )
}

export default Header
