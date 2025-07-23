import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ZoomControlButtons from "../components/map/ZoomControlsButtons";
import DetectLocation from "../components/map/DetectLocation";
import useGetEvents from "../hooks/events/useGetEvents";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import EventDetails from "../components/map/EventDetails";
import Loader from "../ui/loader/Loader";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const defaultPosition = {
  lat: 21.285407,
  lng: 39.237551,
};

export default function InteractiveMap() {
  const { t } = useTranslation();

  const [userLocation, setUserLocation] = useState(null);
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [detectLocation, setDetectLocation] = useState(false);

  const { data: events, isLoading, isError } = useGetEvents("event");

  const mapCenter = events?.length
    ? { lat: events[0].lat, lng: events[0].lng }
    : defaultPosition;

  const handleMarkerClick = (id) => {
    setActiveMarkerId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="map-section">
      {isLoading && <Loader />}
      {isError && <div>Error loading events.</div>}
      {!isLoading && !isError && (
        <MapContainer
          center={mapCenter}
          zoom={10}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          {/* Base Map Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* User Location Detection */}
          {detectLocation && (
            <DetectLocation
              setUserLocation={setUserLocation}
              setShouldDetectLocation={setDetectLocation}
            />
          )}

          {/* Show User Marker */}
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>{t("Your location")}</Popup>
            </Marker>
          )}

          {/* Event Markers */}
          {events.map((event) => (
            <Marker
              key={event.id}
              position={{
                lat: event.lat,
                lng: event.lng,
              }}
              eventHandlers={{ click: () => handleMarkerClick(event.id) }}
              icon={
                new L.DivIcon({
                  className: "custom-marker",
                  html: `
                  <div class="event_marker" title="${event.title}">
                    <img src="${event.image}" alt="${event.title}" />
                  </div>
                  `,
                  iconAnchor: [15, 30],
                })
              }
            />
          ))}

          {/* Active Marker Popup */}
          {activeMarkerId &&
            (() => {
              const activeEvent = events.find((e) => e.id === activeMarkerId);
              if (!activeEvent?.lat || !activeEvent?.lng) return null;

              return (
                <Popup
                  key={activeMarkerId}
                  position={{
                    lat: activeEvent.lat,
                    lng: activeEvent.lng,
                  }}
                  onClose={() => setActiveMarkerId(null)}
                >
                  <EventDetails t={t} activeEvent={activeEvent} />
                </Popup>
              );
            })()}

          {/* Custom Controls */}
          <div className="map-controls">
            <button
              className="control-btn"
              onClick={() => setDetectLocation(true)}
              aria-label="Detect my location"
            >
              <i className="fa-solid fa-location-arrow" />
            </button>

            <ZoomControlButtons />
          </div>
        </MapContainer>
      )}
    </section>
  );
}
