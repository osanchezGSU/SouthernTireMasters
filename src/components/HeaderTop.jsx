import React from "react";
import { FaRegClock } from "react-icons/fa6";



function HeaderTop(){
    const today = new Date().getDay();

    return(
        <div className="header-top grid">
            <div className="hours_of_oper">
                    <div className= {today >= 1 && today <= 5 ? 'active' : ''}>
                        <FaRegClock />
                        <span >Mon-Fri | 8am - 6pm</span>
                    </div>
                    <div className= {today == 6 ? 'active' : ''}>
                        <FaRegClock />
                        <span >Sat | 8am - 5pm</span>
                    </div>
                    <div className= {today == 0 ? 'active' : ''}>
                        <FaRegClock />
                        <span  >Sun | Closed</span>
                    </div>
            </div>
        </div>
    )
}

export default HeaderTop;