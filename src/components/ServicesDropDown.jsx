import React from "react";
import links from '../assets/js/servicesLinks'
import { IoIosArrowForward } from "react-icons/io";

function ServicesDropDown(){
    function createDropDown(link){
        return (<a href="" className="link">
            <span>{link.name}</span>
            <IoIosArrowForward />
        </a>
        )

    }


    return(
    <div className="serviceDropDownContainer dropDownMenuContainer">
        <div className="dropDownMenu">
            <span>Tire Services</span>
            {links.tireServiceLinks.map(createDropDown)}
            <a href="" className="link">View All <IoIosArrowForward /></a>
        </div>
        <div className="dropDownMenu">
            <span>Automotive Services</span>
            {links.automotiveServiceLinks.map(createDropDown)}
            <a href="" className="link">View All <IoIosArrowForward /></a>
        </div>
    </div>
    )
}

export default ServicesDropDown;