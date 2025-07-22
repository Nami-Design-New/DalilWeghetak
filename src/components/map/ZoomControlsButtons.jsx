import { useMap } from "react-leaflet";

export default function ZoomControlButtons() {
  const map = useMap();

  const zoomIn = () => map.setZoom(Math.min(map.getZoom() + 1, 21));
  const zoomOut = () => map.setZoom(Math.max(map.getZoom() - 1, 0));

  return (
    <>
      <button className="control-btn" onClick={zoomIn} aria-label="Zoom in">
        <i className="fa-regular fa-plus" />
      </button>
      <button className="control-btn" onClick={zoomOut} aria-label="Zoom out">
        <i className="fa-regular fa-minus" />
      </button>
    </>
  );
}
