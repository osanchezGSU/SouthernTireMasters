import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

function LocationListCard ({isClosest, distanceInMiles, name, phone, streetAddress, city, state, zipCode, shareLink, isOpen}) {
    return(
            <div className="closest-location-card-body location-card">
                    <div className="body-header">
                        {isClosest && <p className="label">Closest Location</p> }
                        {distanceInMiles && <p>{distanceInMiles} mi</p>}
                    </div>
                    <h2 className="primary body-title">{name}</h2>
                    <div className="body-info"> <FaPhoneAlt /> <a href={`tel:${phone}`}><h3>{phone}</h3></a></div>
                    <div className="body-info"><FaLocationDot /> <h3>{streetAddress} {city}, {state} {zipCode}</h3></div>
                    <p className={`isOpen-label ${isOpen ? "open" : "closed"}`}>{isOpen ? "Open" : "Closed"}</p>
                    <div className="body-buttons">
                        <Link to="/locations" className="primary-button button" > 
                            <span>See Other Locations!</span>  
                        </Link>
                        <a 
                          href={shareLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button secondary-button"
                        >Get Directions</a>
                    </div>
                </div>
    )
}
export default LocationListCard;