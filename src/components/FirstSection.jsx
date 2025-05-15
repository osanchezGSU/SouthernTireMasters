import React from "react";
import { TbBackground } from "react-icons/tb";

function FirstSection ({backgroundImage, title}) {
    const sectionStyle = {
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
    }
    return(
         <div style={sectionStyle} className="first-section">
            <h1>{title}</h1>
         </div>
    )
}
export default FirstSection;