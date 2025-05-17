import React from "react";


function ImageHero ({backgroundImage, title}) {
    const sectionStyle = {
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
    }
    return(
         <div style={sectionStyle} className="first-section service-image-hero">
            <h1>{title}</h1>
         </div>
    )
}
export default ImageHero