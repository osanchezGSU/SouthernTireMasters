import React from "react";
import LocationListView from "./LocationListView";
import LocationMapView from "./LocationMapView";
function LocationComponentDesktop () {
    return (
        <div className="location-component-desktop">
            <LocationListView />
            <LocationMapView />
            
        </div>
    )
}
export default LocationComponentDesktop;