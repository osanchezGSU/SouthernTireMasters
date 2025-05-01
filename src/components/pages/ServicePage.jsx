import React from "react";
import { useParams } from 'react-router-dom';

function ServicePage()  {
    const { name } = useParams();

    return(
         <div>
            <h1>Service Details: {name.replace('-', ' ')}</h1>
            {/* You could load more details based on `name` */}
        </div>
    )
}

export default ServicePage;