import React, {useState} from "react";
import LocationListCard from "./LocationListCard";
import locations from '../assets/js/locations'
import LocationListView from "./LocationListView";
import LocationMapView from "./LocationMapView";
import { FaRegMap,  FaList  } from "react-icons/fa";
import LocationComponentMobile from "./LocationComponentMobile"
import LocationComponentDesktop from "./LocationComponentDesktop";



function LocationComponent({isMobile}) {



    return(
        <> 
            {isMobile ?
          
             <LocationComponentMobile />
            : 
            <LocationComponentDesktop />
            }
        </>

    )

}

export default LocationComponent;