import React, {useState, useEffect} from "react";
import HelmetComponent from "../HelmetComponent";
import backgroundImage from "../../assets/img/serviceImages/tireRotationService.jpeg"
import FirstSection from "../FirstSection";
import ServiceToggleComponent from "../ServiceToggleComponent";
import useResponsive from "../hooks/useResponsive";

function Services () {
   const isMobile = useResponsive();
   

    return(
        <>
            <HelmetComponent title="Services" description="Southern Tire Masters Services Page."/>
            <FirstSection title="Services" backgroundImage={backgroundImage}/>
            <section className="services">
                <ServiceToggleComponent isMobile={isMobile}/>
            </section>
        </>
    )
}

export default Services;