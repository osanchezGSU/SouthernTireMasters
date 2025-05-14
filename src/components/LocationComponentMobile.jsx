import React from "react";
import LocationListView from "./LocationListView";
import LocationMapView from "./LocationMapView";

function LocationComponentMobile () {
    return (
        <div className="location-component-mobile">
            <LocationListView />
            <LocationMapView />
        </div>
    )
}
export default LocationComponentMobile