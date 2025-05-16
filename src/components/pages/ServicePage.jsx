import React from "react";
import { useParams } from 'react-router-dom';
import HelmetComponent from "../HelmetComponent";
import services from '../../assets/js/servicesLinks'
import FirstSection from "../FirstSection";
import ServiceDescriptionHero from "../ServiceDescriptionHero";
import useResponsive from "../hooks/useResponsive";


function ServicePage()  {
    const isMobile = useResponsive();
    const { name } = useParams();
    console.log(name)
    const allServices = [...services.tireServiceLinks, ...services.automotiveServiceLinks];
     const service = allServices.find(
        (item) => item.paraName === name
    );

   

    return(
         <div>
            <HelmetComponent 
                title={service.name} 
                description={`Southern Tire Masters ${service.name} page.`} 
            />
            <FirstSection backgroundImage={service.img} title={service.name}/>
            <ServiceDescriptionHero image={service.img} description={isMobile ? service.shortDescription : service.longDescription}/>
            
        </div>
    )
}

export default ServicePage;