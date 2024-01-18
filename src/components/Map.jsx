import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import proptypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  // useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const [mapPosition, setMapPosition] = useState([46.624, 8.036]);
  const { cities } = useCities();
  const [searchParams] = useSearchParams();
  const maplat = searchParams.get("lat");
  const maplng = searchParams.get("lng");

  // useEffect(
  //   function () {
  //     if (maplat && maplng) setMapPosition([maplat, maplng]);
  //   },
  //   [maplat, maplng]
  // );
  useEffect(() => {
    if (maplat && maplng) {
      setMapPosition([Number(maplat), Number(maplng)]);
    }
  }, [maplat, maplng]);
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        // center={[maplat, maplng]}
        zoom={14}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        {/* <DetectClick /> */}
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  ChangeCenter.propTypes = {
    // position: proptypes.func,
    // position: proptypes.arrayOf(proptypes.number).isRequired,
  };
  const map = useMap();
  map.setView(position);
  return null;
}

// function DetectClick() {
//   const navigate = useNavigate();

//   useMapEvent({
//     click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
//   });
// }

export default Map;
