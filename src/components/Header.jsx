import React from "react";
import HeaderTop from "./HeaderTop";

import HeaderBottom from "./HeaderBottom";
import '../assets/css/Header.css'

function Header() {
    return(
        <header>
            <HeaderTop />
      
            <HeaderBottom />
        </header>
    );
}

export default Header;