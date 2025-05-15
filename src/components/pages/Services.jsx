import React, {useState, useEffect} from "react";
import HelmetComponent from "../HelmetComponent";
import backgroundImage from "../../assets/img/serviceImages/tireRotationService.jpeg"
import FirstSection from "../FirstSection";
import ServiceToggleComponent from "../ServiceToggleComponent";


function Services () {
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
            <HelmetComponent title="Services" description="Southern Tire Masters Services Page."/>
            <FirstSection title="Services" backgroundImage={backgroundImage}/>
            <section className="services">
                <ServiceToggleComponent isMobile={isMobile}/>
            </section>
        </>
    )
}

export default Services;