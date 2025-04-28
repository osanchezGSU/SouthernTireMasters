import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function HeaderTop(){
    const today = new Date().getDay();

    return(
        <div className="header-top">
            <div className="hours_of_oper">
                    <div className= {today >= 1 && today <= 5 ? 'active' : ''}>
                        <FontAwesomeIcon icon={['far', 'clock']} />
                        <span >Mon-Fri | 8am - 6pm</span>
                    </div>
                    <div className= {today == 6 ? 'active' : ''}>
                        <FontAwesomeIcon icon={['far', 'clock']} />
                        <span >Sat | 8am - 5pm</span>
                    </div>
                    <div className= {today == 0 ? 'active' : ''}>
                        <FontAwesomeIcon icon={['far', 'clock']} />
                        <span  >Sun | Closed</span>
                    </div>
            </div>
        </div>
    )
}

export default HeaderTop;