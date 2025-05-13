import React from "react";
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

function LocationListCard ({isClosest, distanceInMiles, name, phone, streetAddress, city, state, zipCode, userLat, userLng, closestLat, closestLng}) {
    return(
            <div className="closest-location-card-body">
                    <div className="body-header">
                        {isClosest && <p className="label">Closest Location</p> }
                        {distanceInMiles && <p>{distanceInMiles} mi</p>}
                    </div>
                    <h2 className="primary body-title">{name}</h2>
                    <div className="body-info"> <FaPhoneAlt /> <a href={`tel:${phone}`}><h3>{phone}</h3></a></div>
                    <div className="body-info"><IoMdPin /> <h3>{streetAddress} {city}, {state} {zipCode}</h3></div>
                    <div className="body-buttons">
                        <Link to="/locations" className="primary-button button" > 
                            <span>See Other Locations!</span>  
                        </Link>
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${closestLat},${closestLng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button secondary-button"
                        >Get Directions</a>
                    </div>
                </div>
    )
}
export default LocationListCard;