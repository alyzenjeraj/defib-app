import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapElement() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 51.048615, lng: -114.070847 }), []);
  const markerTest = useMemo(() => ({ lat: 51.048615, lng: -114.070847 }), []); 

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        key={1}
        position={markerTest} 
      />
    </GoogleMap>
  );
}