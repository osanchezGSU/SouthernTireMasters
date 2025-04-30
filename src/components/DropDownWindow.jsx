import React from "react";
import { TbDeviceIpadHorizontalUp } from "react-icons/tb";
import shopTireLinks from '../assets/js/shopTireLinks'
import { IoIosArrowForward } from "react-icons/io";


function DropDownWindow(props) {
    function createDropDown(link){
        return (
            <a href="" className="link">
                <span>{link.name}</span>
                <IoIosArrowForward />
            </a>
                
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