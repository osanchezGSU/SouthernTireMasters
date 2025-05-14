import React, { useState } from "react";
import LocationListView from "./LocationListView";
import LocationMapView from "./LocationMapView";
import { FaListUl } from "react-icons/fa6";
import { CiMap, CiMountain1 } from "react-icons/ci";

function LocationComponentMobile() {
    const [view, setView] = useState("list"); // 'list' or 'map'

    const handleToggle = () => {
        setView(prev => (prev === "list" ? "map" : "list"));
    };

    const label = view === "list" ? "Map View" : "List View";
    const icon = view === "list" ? (<CiMap />) : (<FaListUl />);
    const ComponentToRender = view === "list" ? LocationListView : LocationMapView;

    return (
        <div className="location-component-mobile">
            <div className="toggle-button-container">
                <div className="toggle-button" onClick={handleToggle}>
                    {icon}
                    <span>{label}</span>
                </div>
            </div>
            <ComponentToRender key={view} /> 
        </div>
    );
}

export default LocationComponentMobile;
