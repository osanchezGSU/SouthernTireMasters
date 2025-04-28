import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import '../assets/css/Header.css'

function Header() {
    return(
        <header>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />

        </header>
    );
}

export default Header;