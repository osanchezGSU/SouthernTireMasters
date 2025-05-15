import React from "react";
import TireConnectWidget from "../TireConnectWidget";
import HelmetComponent from "../HelmetComponent";
import SectionTitle from "../SectionTitle";
import FirstSection from "../FirstSection";
import backgroundImage from '../../assets/img/serviceImages/tirePurchaseService.jpeg'

function ShopTires () {
    return(
        <>  
            <HelmetComponent title="Shop Tires" description="Southern Tire Masters Shop Tires page." />
            <FirstSection title="Shop Tires" backgroundImage={backgroundImage}/>
            <section>
                <SectionTitle name="Tire Select"/>
              
                <TireConnectWidget /> 
     
            </section>
        </>
    )
}

export default ShopTires;