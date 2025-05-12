import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardGrid ({serviceType}) {
    return(
        <div className="card-container-grid">
            {serviceType.map((service) => (
                       <ServiceCard {...service} />
                ))}
        </div>
    )
}

export default ServiceCardGrid;