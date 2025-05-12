import React, {useState} from "react";
import {Link} from 'react-router-dom'


function ServiceCard ({img, name, description, url }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`card ${isHovered ? "hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src={img} alt={name} />
            <div className="card-body">
                <div className="card-content">                                    
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <Link to={url} className="button primary-button"><span>Learn More</span></Link>
            </div>
        </div>
    )
}
export default ServiceCard;