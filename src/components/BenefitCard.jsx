import React from "react";

function BenefitCard({ icon, title, description}) {
    return(
        <div className="benefit-card card" >
            <div>
                {icon}
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default BenefitCard