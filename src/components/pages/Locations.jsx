import React, {useState, useEffect} from "react";
import HelmetComponent from "../HelmetComponent";
import FirstSection from "../FirstSection";
import backgroundImage from "../../assets/img/locationImage.webp"
import SectionTitle from "../SectionTitle";
import LocationComponent from "../LocationComponent";
import { LoadScript } from '@react-google-maps/api';

function Locations () {
        const responsiveSize = 1024;
     const [isMobile, setIsMobile] = useState(window.innerWidth < responsiveSize);
              
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < responsiveSize);
            };
            
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
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