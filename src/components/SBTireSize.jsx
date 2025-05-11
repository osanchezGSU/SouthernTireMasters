import React, {useState, useRef} from "react";
import Select from 'react-select'
import sizes from '../assets/js/sizes'
import {Link} from 'react-router-dom'


function SBTireSize() {
    const [selectedWidth, setSelectedWidth] = useState(null);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [selectedWheelSize, setSelectedWheelSize] = useState(null);

    const profileRef = useRef(null);
    const wheelSizeRef = useRef(null);
  
    const widthOptions = Object.keys(sizes).map((width) => ({
      value: width,
      label: width
    }));
  
    const profileOptions = selectedWidth
      ? Object.keys(sizes[selectedWidth.value]).map((profile) => ({
          value: profile,
          label: profile
        }))
      : [];
  
    const wheelSizeOptions = selectedWidth && selectedProfile
      ? sizes[selectedWidth.value][selectedProfile.value].map((size) => ({
          value: size,
          label: size
        }))
      : [];

      const isReady = selectedWidth !== null && selectedProfile !== null && selectedWheelSize !== null;


    const targetUrl = `/shop-tires#!results?width=${selectedWidth?.value}&height=${selectedProfile?.value}&rim=${selectedWheelSize?.value}&order_by=best_match&display=full&location_id=23406&season_id=all&search_by=size&page=1`;
  
    return (
      <>
        <Select
          placeholder="Select Width"
          value={selectedWidth}
          onChange={(option) => {
            setSelectedWidth(option);
            setSelectedProfile(null);
            setSelectedWheelSize(null);
            setTimeout(() => profileRef.current?.focus(), 0);
          }}
          options={widthOptions}
        />
        <Select
          placeholder="Select Profile"
          ref={profileRef}
          value={selectedProfile}
          onChange={(option) => {
            setSelectedProfile(option);
            setTimeout(() => wheelSizeRef.current?.focus(), 0);
            setSelectedWheelSize(null);
          }}
          options={profileOptions}
          isDisabled={!selectedWidth}
        />
        <Select
          placeholder="Select Wheel Size"
          ref={wheelSizeRef}
          value={selectedWheelSize}
          onChange={(option) => {
            setSelectedWheelSize(option)

            console.log(selectedProfile, selectedWheelSize, selectedWidth)
          }}
          options={wheelSizeOptions}
          isDisabled={!selectedProfile}
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
    );
  }
export default SBTireSize;