import React, {useState} from "react";
import { GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';
import locations from '../assets/js/locations'


function LocationMapView () {
  const [selectedMarker, setSelectedMarker] = useState(null)
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
                  center={selectedMarker ? selectedMarker.coordinates : center}
                  zoom={selectedMarker ? 14 : 10}
                  options={{
                    mapId: 'c1cae4e3db6fb493',
                  }}>
                
                {locations.map((location) => (
                    <Marker
                      position={location.coordinates}
                      title={location.name}
                      onClick={() => setSelectedMarker(location)}
                    />  
                ))}

                {selectedMarker && (
                  <InfoWindow 
                    
                    position={selectedMarker.coordinates}
                    onCloseClick={() => setSelectedMarker(null)}
                  >
                    <div className="infoWindow-card">
                      <h3 className="primary">{selectedMarker.name}</h3>
                      <p>{selectedMarker.phone}</p>
                      <p className={`isOpen-label ${selectedMarker.isOpen ? "open" : "closed"}`}>{selectedMarker.isOpen ? "Open" : "Closed"}</p>
                      <a 
                          href={selectedMarker.shareLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button secondary-button"
                        >Get Directions</a>
                    </div>    
                  </InfoWindow>
                )}
                
              </GoogleMap>
        </div>
    )
}
export default LocationMapView;