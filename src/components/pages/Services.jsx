import React, {useState, useEffect} from "react";
import HelmetComponent from "../HelmetComponent";
import backgroundImage from "../../assets/img/serviceImages/tireRotationService.jpeg"
import ImageHero from "../ImageHero";
import ServiceToggleComponent from "../ServiceToggleComponent";
import useResponsive from "../hooks/useResponsive";

function Services () {
   const isMobile = useResponsive();
   

    return(
        <>
            <HelmetComponent title="Services" description="Southern Tire Masters Services Page."/>
            <ImageHero title="Services" backgroundImage={backgroundImage}/>
            <section className="services">
                <ServiceToggleComponent isMobile={isMobile}/>
            </section>
        </>
    )
}

export default Services;