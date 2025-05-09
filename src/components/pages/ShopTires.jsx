import React from "react";
import TireConnectWidget from "../TireConnectWidget";
import HelmetComponent from "../HelmetComponent";


function ShopTires () {
    return(
        <>  
            <HelmetComponent title="Shop Tires" description="Southern Tire Masters Shop Tires page." />
            <h1>Shop Tires Page</h1>
            <TireConnectWidget />
        </>
    )
}

export default ShopTires;