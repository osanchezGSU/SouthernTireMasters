import React, {useEffect, useState, useRef} from "react";
import { GoogleMap, Marker} from '@react-google-maps/api';

import locations from '../assets/js/locations';

import LocationListCard from "./LocationListCard";

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

              locations.forEach((loc) => {
                loc.isClosest = loc === closestLocation;
              });

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
                  options={{
                    mapId: 'c1cae4e3db6fb493',
                  }}>
                <Marker
                  position={closest.coordinates}
                  title={closest.name}
                  labelOrigin={new window.google.maps.Point(0, 40)} 
                  
                />
              </GoogleMap>
              <LocationListCard 
                isClosest={true}
                distanceInMiles={closest.distanceInMiles}
                name={closest.name} 
                phone={closest.phone}
                streetAddress={closest.streetAddress}
                city={closest.city}
                state={closest.state}
                zipCode={closest.zipCode}
                shareLink={closest.shareLink}
                isOpen={closest.isOpen}
               />
          
              
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