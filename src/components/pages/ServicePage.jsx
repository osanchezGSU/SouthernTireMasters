import React from "react";
import { useParams } from 'react-router-dom';
import HelmetComponent from "../HelmetComponent";

function ServicePage()  {
    const { name } = useParams();

    return(
         <div>
            <HelmetComponent 
                title={name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())} 
                description={`Southern Tire Masters ${name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())} page.`} 
            />
            {/* You could load more details based on `name` */}
        </div>
    )
}

export default ServicePage;