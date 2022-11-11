import { useEffect, useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Map from "./components/Map";
import Attribution from "./components/Attribution";

import "./App.css";

function App() {
  const [IP, setIP] = useState("");
  const [location, setLocation] = useState("");
  const [postcode, setPostcode] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [showError, setShowError] = useState(false);
  const [showMap, setShowMap] = useState(true);

  async function getLocationByIp(userInput = "") {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_O5whRel4pZ9ZVbonl8lgQz6A9V4Lr&domain=${userInput}`
    );
    const data = await response.json();

    if (!response.ok) {
      setIP("");
      setLocation("");
      setPostcode("");
      setTimezone("");
      setISP("");

      setShowError(true);
      setShowMap(false);
      return;
    }

    setIP(data.ip);
    setLocation(data.location.city);
    setPostcode(data.location.postalCode);
    setTimezone("UTC" + data.location.timezone);
    setISP(data.isp);

    setLat(data.location.lat);
    setLng(data.location.lng);

    setShowError(false);
    setShowMap(true);
  }

  useEffect(() => {
    getLocationByIp();
  }, []);

  return (
    <div className="App">
      <header>
        <div className="header-box">
          <h1>IP Address Tracker</h1>
          <Input getLocationByIp={getLocationByIp} />
          <Output
            ip={IP}
            location={location}
            postcode={postcode}
            timezone={timezone}
            isp={ISP}
          />
        </div>
      </header>
      <Map showMap={showMap} showError={showError} lat={lat} lng={lng} />
      <Attribution />
    </div>
  );
}

export default App;
