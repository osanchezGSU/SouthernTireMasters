import React from "react";
import {Link} from 'react-router-dom'
import useResponsive from "./hooks/useResponsive";


function ServiceDescriptionHero ({image, description}) {
    const isMobile = useResponsive();
    return(
        <section >
            <div className={`service-description-hero ${isMobile ? "mobile" : " "}`}>
                <div className="description-container">
                    <p>{description}</p>
                </div>
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
                
                <div className="link-container">
                    <Link to="/services" className="button primary-button"> 
                        <span>View All Services</span>  
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ServiceDescriptionHero;