import React from "react";
import { TbDeviceIpadHorizontalUp } from "react-icons/tb";
import shopTireLinks from '../assets/js/shopTireLinks'
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';
import {preloadShopTires} from '../routes'


function DropDownWindow({isActive, onLinkClick}) {
    function createDropDown(link){
        return (
            
            <Link key = {link.id} className="link" to={link.url} onMouseEnter={preloadShopTires} onTouchStart={preloadShopTires} onClick={() => {
                      if (onLinkClick) onLinkClick();
                    }}>
                <span>{link.name}</span>
                <IoIosArrowForward />
            </Link>
                
        )

    }


    return(
    <div className={`dropDownMenu dropDownMenuContainer ${isActive ? 'active' : ''}`}>

        <span>Shop For Tires</span>

        {shopTireLinks.map(createDropDown)}
    </div>
    )
}

export default DropDownWindow;