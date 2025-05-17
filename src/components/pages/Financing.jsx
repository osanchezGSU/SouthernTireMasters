import React from "react";
import HelmetComponent from "../HelmetComponent";
import ImageHero from "../ImageHero";
import backgroundImage from "../../assets/img/financeImage.jpg"
function Financing () {
    return(
        <>
        <HelmetComponent title="Financing" description="Southern Tire Masters financing page" />
        <img src={backgroundImage} alt="" className="financing-img"/>
        </>
    )
}

export default Financing;