import React, {useState} from "react";
import servicesLinks from "../assets/js/servicesLinks";
import ServiceCardContainer from "./ServiceCardContainer";
import ServiceCardGrid from "./ServiceCardGrid";

function ServiceToggleComponent ({isMobile}) {
    const optionA = {value: servicesLinks.tireServiceLinks, label: "Tire Services"}
    const optionB = {value: servicesLinks.automotiveServiceLinks, label: "Automotive Services"}
    const [selectedToggleOption, setSelectedToggleOption] = useState(optionA);

    return(
        <>
            <div className="toggle-container">
                <div onClick={() => (setSelectedToggleOption(optionA), console.log(selectedToggleOption))} className={`toggle-button ${selectedToggleOption.value === optionA.value ? "active" : ""}`} >
                    <span>{optionA.label}</span>
                </div>
                <div onClick={() => (setSelectedToggleOption(optionB), console.log(selectedToggleOption))} className={`toggle-button ${selectedToggleOption.value === optionB.value ? "active" : ""}`} >
                    <span>{optionB.label}</span>
                </div>
            </div>
            {isMobile ? 
                (<ServiceCardContainer serviceType= {selectedToggleOption.value}/>) 
                : 
                (<ServiceCardGrid serviceType={selectedToggleOption.value} />)
            }
        </>
    )
}
export default ServiceToggleComponent;