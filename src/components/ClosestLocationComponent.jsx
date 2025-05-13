import React, {useEffect, useState} from "react";
import { LoadScript, GoogleMap, Marker} from '@react-google-maps/api';
import locations from '../assets/js/locations';
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

function ClosestLocationComponent ({userLocation}) {
    const [closest, setClosest] = useState(null);
    useEffect(() => {
        const directionsService = new window.google.maps.DirectionsService();
        
        const calculateDistances = async () => {
            const results = await Promise.all(
              locations.map(
                (location) =>
                  new Promise((resolve) => {
                    directionsService.route(
                      {
                        origin: userLocation,
                        destination: location.coordinates,
                        travelMode: window.google.maps.TravelMode.DRIVING,
                      },
                      (result, status) => {
                        if (status === 'OK') {
                          const meters = result.routes[0].legs[0].distance.value;
                          const miles = parseFloat(meters / 1609.344).toFixed(2);
                          location.distanceInMiles = miles
                          resolve({ ...location, distanceInMiles: miles });
                        } else {
                          console.warn(`Failed for ${location.name}: ${status}`);
                          resolve(null);
                        }
                      }
                    );
                  })
              )
            );
          
            const validResults = results.filter((r) => r !== null);
            if (validResults.length) {
              const closestLocation = validResults.reduce((min, curr) =>
                curr.distanceInMiles < min.distanceInMiles ? curr : min
              );
              setClosest(closestLocation);
            }
          };
        
    
        if (userLocation && window.google) {
          calculateDistances();
        }
      }, [userLocation]);
    
    

    return (
      <>
        {closest ? (
            <div className="closest-location-card">
                <GoogleMap
                mapContainerClassName="map-container"
                center={closest.coordinates}
                zoom={15}
                >
                {/* Add markers or other components here */}
                </GoogleMap>
                <div className="closest-location-card-body">
                    <div className="body-header"><p className="label">Closest Location</p> <p>{closest.distanceInMiles} mi</p></div>
                    <h2 className="primary body-title">{closest.name}</h2>
                    <div className="body-info"> <FaPhoneAlt /> <a href={`tel:${closest.phone}`}><h3>{closest.phone}</h3></a></div>
                    <div className="body-info"><IoMdPin /> <h3>{closest.streetAddress} {closest.city}, {closest.state} {closest.zipCode}</h3></div>
                    <div className="body-buttons">
                        <Link to="/locations" className="primary-button button" > 
                            <span>See Other Locations!</span>  
                        </Link>
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${closest.coordinates.lat},${closest.coordinates.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button secondary-button"
                        >Get Directions</a>

                    </div>
                </div>
            </div>
        ) : 
        (
            <div>

            </div>
        )
        }
      </>
    );
}
export default ClosestLocationComponent