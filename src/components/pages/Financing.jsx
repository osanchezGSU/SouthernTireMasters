import React from "react";
import HelmetComponent from "../HelmetComponent";
import ImageHero from "../ImageHero";
import backgroundImage from "../../assets/img/financeImage.jpg"

function Financing () {
    return(
        <>
        <HelmetComponent title="Financing" description="Southern Tire Masters financing page" />
        <div className="finance-hero">
            <img src={backgroundImage} alt="" className="financing-img"/>
            <div className="finance-hero-content">
                <h1>Flexible Financing with <span>Acima</span></h1>
                <p>Get approved for $300 to $5,000 in shopping power with a quick, no-credit-impact application.</p>
                <a href="https://apply.acima.com/?utm_source=web&utm_medium=merchant&merchant_guid=merc-96d27a68-1a54-4854-941b-a09acc476ffe" className="primary-button button acima-button" target="_blank">
                    <span>Apply Now!</span>
                </a>
        </div>
        </div>
        </>
    )
}

export default Financing;