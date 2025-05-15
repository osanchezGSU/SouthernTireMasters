import React from "react";
import TireConnectWidget from "../TireConnectWidget";
import HelmetComponent from "../HelmetComponent";
import SectionTitle from "../SectionTitle";


function ShopTires () {
    return(
        <>  
            <HelmetComponent title="Shop Tires" description="Southern Tire Masters Shop Tires page." />
            <section className="first-section">
                <SectionTitle name="Tire Select"/>
              
                <TireConnectWidget /> 
     
            </section>
        </>
    )
}

export default ShopTires;