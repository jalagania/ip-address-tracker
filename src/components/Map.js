import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "./Map.css";

function CenterMap(props) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}

function Map(props) {
  const position = [props.lat, props.lng];

  return (
    <div>
      {props.showMap && (
        <div className="map-box" id="map">
          <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
            <CenterMap center={position} zoom={13} />
          </MapContainer>
        </div>
      )}
      {props.showError && (
        <div className="error-box hidden">
          <p>Invalid IP address or domain name</p>
        </div>
      )}
    </div>
  );
}

export default Map;
