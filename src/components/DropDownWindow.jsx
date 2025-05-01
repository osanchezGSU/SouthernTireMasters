import React from "react";
import { TbDeviceIpadHorizontalUp } from "react-icons/tb";
import shopTireLinks from '../assets/js/shopTireLinks'
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';


function DropDownWindow(props) {
    function createDropDown(link){
        return (
            
            <Link key = {link.id} className="link">
                <span>{link.name}</span>
                <IoIosArrowForward />
            </Link>
                
        )

    }


    return(
    <div className={`dropDownMenu dropDownMenuContainer ${props.isActive ? 'active' : ''}`}>

        <span>Shop For Tires</span>

        {shopTireLinks.map(createDropDown)}
    </div>
    )
}

export default DropDownWindow;