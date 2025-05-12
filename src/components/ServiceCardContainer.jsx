import React, {useEffect, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import ServiceCard from "./ServiceCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ServiceCardContainer ({serviceType}) {
    const mobileSize = 768;
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileSize);
          
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < mobileSize);
            };
        
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
    return(
        <div className="cardContainer">
            <Swiper
               
                modules={[Pagination]}
                
                loop={true}
                pagination={{ clickable: true,
                    dynamicBullets: true
                 }}
                 spaceBetween={25}
                 slidesPerView={isMobile ? 1 : 2}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
            >
                {serviceType.map((service) => (
                    <SwiperSlide key={service.id}>
                       <ServiceCard {...service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
       
    )
}
export default ServiceCardContainer;