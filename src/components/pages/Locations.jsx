import React, {useState, useEffect} from "react";
import HelmetComponent from "../HelmetComponent";
import FirstSection from "../FirstSection";
import backgroundImage from "../../assets/img/locationImage.webp"
import SectionTitle from "../SectionTitle";
import LocationComponent from "../LocationComponent";
import { LoadScript } from '@react-google-maps/api';
import useResponsive from "../hooks/useResponsive";

function Locations () {
       const isMobile = useResponsive();
    return(
        <>
            <HelmetComponent title="Locations" description="Southern Tire Masters List of Locations" />
            <FirstSection title="Locations" backgroundImage={backgroundImage}/>
            <section className="location-section">
                <LoadScript googleMapsApiKey="AIzaSyCF_5qaMWKf4LyZfYA14lLxy_vG14JIDJE" >
                    <SectionTitle name = "Find a Location Near You"></SectionTitle>
                    <LocationComponent isMobile={isMobile}/>
                </LoadScript>
            </section>
        
        </>
    )
}

export default Locations;