import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 24.7136,
  lng: 46.6753,
};

function MapComponent({ location, onLocationChange }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", 
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
      onClick={(e) =>
        onLocationChange({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        })
      }
    >
      <Marker position={location} />
    </GoogleMap>
  ) : (
    <p>تحميل الخريطة...</p>
  );
}
