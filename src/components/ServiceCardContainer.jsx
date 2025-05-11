import React from "react";
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ServiceCardContainer ({serviceType}) {
    return(
        <div className="cardContainer">
            <Swiper
               
                modules={[Pagination]}
          
                pagination={{ clickable: true }}
                 spaceBetween={25}
                 slidesPerView={1}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
            >
                {serviceType.map((service) => (
                    <SwiperSlide key={service.id}>
                        <div className="card" >
                            <img src={service.img} alt={service.name} />
                            <div className="card-body">
                                <div className="card-content">
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                </div>
                                <Link to={service.url} className="button primary-button"><span>Learn More</span></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
       
    )
}
export default ServiceCardContainer;