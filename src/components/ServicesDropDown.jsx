import React from "react";
import links from '../assets/js/servicesLinks'
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'

function ServicesDropDown(props){
    function createDropDown(link){
        return (
            <Link key={link.id} to={link.url} className="link">
                <span>{link.name}</span>
                <IoIosArrowForward />
            </Link>
        )

    }


    return(
    <div className={`serviceDropDownContainer dropDownMenuContainer ${props.isActive ? 'active' : ''}`}>
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