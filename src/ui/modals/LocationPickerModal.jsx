import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Modal from "react-bootstrap/Modal";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LocationPickerModal = ({ title, showModal, setShowModal, onSelect }) => {
  const defaultPosition = [24.7136, 46.6753];
  const [position, setPosition] = useState(defaultPosition);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        onSelect(e.latlng);
      },
    });

    return position ? <Marker position={position} /> : null;
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "400px" }}>
        <MapContainer
          center={defaultPosition}
          zoom={10}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </Modal.Body>
    </Modal>
  );
};

export default LocationPickerModal;
