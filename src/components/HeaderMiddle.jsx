import React from "react";
import logo from '../assets/img/logo.png'
import '../assets/js/locations'
import HeaderCard from "./HeaderCard";
import locations from '../assets/js/locations'

function createHeaderCard (location) {
    return <HeaderCard
        key = {location.id}
        streetAddress = {location.name}
        city = {location.city}
        state = {location.state}
        zipCode = {location.zipCode}
        phone = {location.phone}


    />

}

function HeaderMiddle() {
    return (
        <div className="header-middle">
            <img src={logo} alt="" />
            {locations.map(createHeaderCard)}

            
        </div>
    );
}

export default HeaderMiddle;