import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import BenefitCard from './BenefitCard';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";

function BenefitsCardContainer() {
    
const benefits = [
    {
        id: 1,
        icon: <RiMoneyDollarCircleLine />,
        title: "Affordable Rates",
        description: "Get the performance and safety you need without breaking the bank."
    },
      {
        id: 2,
        icon: <MdChecklist />,
        title: "Prompt & Reliable Solutions",
        description: "Our skilled team ensures fast, efficient service so you can get back on the road with confidence."
    },
      {
        id: 3,
        icon: <FaToolbox />,
        title: "Experienced Technicians",
        description: "Our experienced technicians bring years of expertise to every tire installation, alignment, and brake service" 
    }
]
    
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
        <>
        {isMobile ? (
            <div className="benefit-container-mobile">
                 <Swiper
               
                modules={[Pagination]}
                
                loop={true}
                pagination={{ clickable: true,
                    dynamicBullets: true
                 }}
                 spaceBetween={25}
                 slidesPerView={isMobile ? 1 : 2}
                
            >
                {benefits.map((benefit) => (
                    <SwiperSlide key={benefit.id}>
                       <BenefitCard {...benefit} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            ) : 
            (
            <div className="benefit-container-mobile">
                {benefits.map((benefit) => (
                    <BenefitCard {...benefit} key={benefit.id}/>
                ))}
            </div>
            )}
        </>
    )

}
export default BenefitsCardContainer;