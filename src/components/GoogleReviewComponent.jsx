import React from "react";
import reviews from '../assets/js/reviews'
import { FcGoogle } from "react-icons/fc";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import useResponsive from './hooks/useResponsive'
import GoogleReviewCard from "./GoogleReviewCard";

function GoogleReviewComponent () {
    const isMobile = useResponsive(); 
    return(
        <div className="google-review-container">
            <div className="google-review-container-header">
                <div>
                    <FcGoogle />
                    <div>
                        <h2>Excellent on Google</h2>
                        <span>151 reviews</span>
                    </div>
                </div>
                <a href="https://g.page/r/CQed54mqv_2sEAE/review" target="_blank" className="button primary-button"><span>Review us on Google</span></a>
            </div>
           <div>
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
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                       <GoogleReviewCard {...review} />
                    </SwiperSlide>
                ))}
            </Swiper>
           </div>
        </div>
    )
}

export default GoogleReviewComponent;