import React, {useState} from "react";
import Select from 'react-select'
import states from '../assets/js/states'
import {Link} from 'react-router-dom';



function SBLicensePlate () {
    const [licensePlate, setLicensePlate] = useState(null)
    const [selectedState, setSelectedState] = useState(null);
    const isReady = selectedState !== null && licensePlate !== null;


    const targetUrl = `/shop-tires#!search?license=${licensePlate?.trim() || ''}&license_ready=true&state=${selectedState?.value || ''}`;

    return(
        <>
            <Select options={states} placeholder="Select State" onChange={(option) => setSelectedState(option.value)}/>
            <input 
                type="text" 
                value={licensePlate} 
                onChange={(e) => setLicensePlate(e.target.value)} 
                placeholder="Enter License Plate"
            />
            <Link
                to={isReady ? targetUrl : "/shop-tires"}
                className={`primary-button button ${!isReady ? "disabled" : ""}`}
                onClick={(e) => {
                if (!isReady) e.preventDefault();
                }}
            >
                <span>Search</span>
            </Link>
        </>
    )
}
export default SBLicensePlate;