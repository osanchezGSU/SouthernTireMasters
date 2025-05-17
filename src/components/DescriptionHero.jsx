import React from "react";
import {Link} from 'react-router-dom'
import useResponsive from "./hooks/useResponsive";


function DescriptionHero ({description}) {
    const isMobile = useResponsive();
    return(
        
            <div className= "service-description-hero">
                <div className="description-container">
                    <p>{description}</p>
                </div>
                <div className="link-container">
                    <Link to="/services" className="button primary-button"> 
                        <span>View All Services</span>  
                    </Link>
                </div>
            </div>
        
    )
}
export default DescriptionHero;