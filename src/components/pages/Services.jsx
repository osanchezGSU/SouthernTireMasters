import React from "react";
import HelmetComponent from "../HelmetComponent";
import backgroundImage from "../../assets/img/serviceImages/tireRotationService.jpeg"
import FirstSection from "../FirstSection";
function Services () {
    return(
        <>
            <HelmetComponent title="Services" description="Southern Tire Masters Services Page."/>
            <FirstSection title="Services" backgroundImage={backgroundImage}/>
        </>
    )
}

export default Services;