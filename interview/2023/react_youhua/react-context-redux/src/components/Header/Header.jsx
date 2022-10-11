import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { ProductContext, ProductDispath } from "../../Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    // const { state } = useContext(ProductContext);
    const location = useLocation();
    const { pathname } = location;
    return (
        <header className="header">
            <nav className="nav">
                <Link to={"/"} className="logo">
                فروشگاه مواد غذایی
                </Link>
                <div className="search_header">{pathname === "/" && <SearchBar />}</div>
                <div className="icon_Sopping_box">
                    <Link to={"/basket"} className="shoppe_icon_box">
                        <AiOutlineShopping className="shop_icon" />
                        {/* {state.basket.length > 0 && (
                            <span className="badge_shope">{state.basket.length}</span>
                        )} */}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header