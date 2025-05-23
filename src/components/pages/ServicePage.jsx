import React from "react";
import { useParams } from 'react-router-dom';
import HelmetComponent from "../HelmetComponent";
import services from '../../assets/js/servicesLinks'
import ImageHero from "../ImageHero";
import DescriptionHero from "../DescriptionHero";
import useResponsive from "../hooks/useResponsive";
import SectionTitle from '../SectionTitle';
import FAQComponent from '../FAQComponent';

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
            {isMobile ? (
                <div>
                    <ImageHero backgroundImage={service.img} title={service.name}/>
                    <section>
                        <DescriptionHero  description={isMobile ? service.shortDescription : service.longDescription}/>
                    </section>
                </div>
            ):(
                <section className="first-section service-page">
                    <div className="service-page-first-section">
                        <DescriptionHero  description={isMobile ? service.shortDescription : service.longDescription}/>
                        <ImageHero backgroundImage={service.img} title={service.name}/>                
                    </div>
                </section>
            )}
           <section className="faq-section">
                <SectionTitle name={`${service.name} FAQ`}/>
                <div className="faq-list-container"> 
                    {service.faqs.map((faq) => (
                        <FAQComponent question={faq.question} answer={faq.answer}/>
                    ))}
                </div>
           </section>
        </div>
    )
}

export default ServicePage;