import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSearchParams } from "react-router";

export default function DetectLocation({
  setUserLocation,
  setShouldDetectLocation,
}) {
  const map = useMap();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      setShouldDetectLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude;
        const lng = coords.longitude;
        const position = [lat, lng];

        setUserLocation(position);
        map.setView(position, 12);
        setShouldDetectLocation(false);

        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("nearest", "1");
        newParams.set("lat", lat);
        newParams.set("lng", lng);
        setSearchParams(newParams);
      },
      () => {
        alert("Unable to retrieve your location.");
        setShouldDetectLocation(false);
      }
    );
  }, [
    map,
    setUserLocation,
    setShouldDetectLocation,
    searchParams,
    setSearchParams,
  ]);

  return null;
}
