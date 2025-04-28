import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function HeaderCard (props) {
    return(
        <div className="headerCard">

            <div className="title">
                <FontAwesomeIcon icon="location-dot" />
                <span>{props.name}</span>
            </div>

            <div className="details">
                <span className="address"> {props.streetAddress} 
                    {props.city}, {props.state} {props.zipCode}
                </span>
                <a href={`tel: ${props.phone}`} class="phoneNumber">{props.phone}</a>
            </div>

        </div>
    )
}

export default HeaderCard;