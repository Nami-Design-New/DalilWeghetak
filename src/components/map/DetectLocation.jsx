import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function DetectLocation({ setUserLocation, setShouldDetectLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      setShouldDetectLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const position = [coords.latitude, coords.longitude];
        setUserLocation(position);
        map.setView(position, 12);
        setShouldDetectLocation(false);
      },
      () => {
        alert("Unable to retrieve your location.");
        setShouldDetectLocation(false);
      }
    );
  }, [map, setUserLocation, setShouldDetectLocation]);

  return null;
}
