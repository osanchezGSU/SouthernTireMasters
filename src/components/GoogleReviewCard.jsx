import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoStarSharp } from "react-icons/io5";

function GoogleReviewCard({name, text, link, date}) {
    return(
        <div className="review-card">
            <h3>{name}</h3>
            <span>{date}</span>
            <div className="star-container"><IoStarSharp className="starIcon" /><IoStarSharp className="starIcon" /><IoStarSharp className="starIcon" /><IoStarSharp className="starIcon" /><IoStarSharp className="starIcon" /></div>
            <p>{text}</p>
            <div className="review-card-footer">
                    <FcGoogle />
                <div>
                    <span>Posted on</span>
                    <a href={link} target="_blank" className="primary">Google</a>
                </div>
            </div>
        </div>
    )
}
export default GoogleReviewCard;