import React from "react";
import { GoogleMap, Marker} from '@react-google-maps/api';
import locations from '../assets/js/locations'


function LocationMapView () {
      const getMapCenter = () => {
    if (locations.length === 0) return { lat: 0, lng: 0 };

    const total = locations.reduce(
      (acc, loc) => {
        acc.lat += loc.coordinates.lat;
        acc.lng += loc.coordinates.lng;
        return acc;
      },
      { lat: 0, lng: 0 }
    );

    return {
      lat: total.lat / locations.length,
      lng: total.lng / locations.length,
    };
  };

  const center = getMapCenter();
    return(
        <div className="location-map-container">
             <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={10}
                  options={{
                    mapId: 'c1cae4e3db6fb493',
                  }}>
                
                {locations.map((location) => (
                    <Marker
                  position={location.coordinates}
                  title={location.name}
                />
                ))}
                
              </GoogleMap>
        </div>
    )
}
export default LocationMapView;