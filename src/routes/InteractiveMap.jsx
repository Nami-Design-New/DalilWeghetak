import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function InteractiveMap() {
  return (
    <section className="map-section mt-80 py-5">
      <div className="container">

        <MapContainer
          center={[24.7136, 46.6753]} 
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[24.7136, 46.6753]}>
            <Popup>الرياض</Popup>
          </Marker>
          <Marker position={[21.3891, 39.8579]}>
            <Popup>مكة المكرمة</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
