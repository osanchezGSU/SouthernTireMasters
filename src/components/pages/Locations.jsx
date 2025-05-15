import React from "react";
import HelmetComponent from "../HelmetComponent";
import FirstSection from "../FirstSection";
import backgroundImage from "../../assets/img/locationImage.webp"
function Locations () {
    return(
        <>
            <HelmetComponent title="Locations" description="Southern Tire Masters List of Locations" />
            <FirstSection title="Locations" backgroundImage={backgroundImage}/>
        
        </>
    )
}

export default Locations;