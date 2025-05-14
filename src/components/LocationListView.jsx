import React from "react";
import locations from '../assets/js/locations'
import LocationListCard from "./LocationListCard";

function LocationListView () {
    
    return(
        <div className="location-list-conatiner">
            {locations.map((location) => (
                    <LocationListCard 
                        name = {location.name}
                        phone={location.phone}
                        streetAddress={location.streetAddress}
                        city={location.city}
                        state={location.state}
                        zipCode={location.zipCode}
                        isClosest={location.isClosest}
                        {...(location.distanceInMiles != null && { distanceInMiles: location.distanceInMiles })}
                        isOpen={location.isOpen}
                        shareLink={location.shareLink}
                    />
            ))}
        </div>
    )
}
export default LocationListView;