import React, { useState, useEffect } from "react";
import IconDelete from '../../assets/icon-delete.svg'; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const JakartaCoordinates = [-6.2088, 106.8456];

const Peta = () => {
  const [position, setPosition] = useState(JakartaCoordinates);
  const [longitude, setLongitude] = useState(JakartaCoordinates[1].toString());
  const [latitude, setLatitude] = useState(JakartaCoordinates[0].toString());

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    setLongitude(lng.toString());
    setLatitude(lat.toString());
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  useEffect(() => {
    const newLongitude = parseFloat(longitude.replace(",", ""));
    const newLatitude = parseFloat(latitude.replace(",", ""));

    if (!isNaN(newLongitude) && !isNaN(newLatitude)) {
      setPosition([newLatitude, newLongitude]);
    }
  }, [longitude, latitude]);

  const handleResetMap = () => {
    setPosition(JakartaCoordinates);
    setLongitude(JakartaCoordinates[1].toString());
    setLatitude(JakartaCoordinates[0].toString());
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "360px", width: "100%" }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div>
              <h2>Selected Location</h2>
              <p>Longitude: {position[1]}</p>
              <p>Latitude: {position[0]}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <button
        className="bg-[#FF3B3B] hover:bg-red-600 w-[150px] h-[40px] px-2 sm:px-4 sm:py-3 mt-8 rounded-xl flex  items-center justify-items-center "
        onClick={handleResetMap}
      >
        <img src={IconDelete} alt="IconDelete" className="w-6 h-6" />
        <span className="text-white ml-2 ">Reset Map</span>
      </button>
      <div className="grid grid-cols-2 grid-rows-1 gap-[12px] items-center justify-center">
        <div>
          <input
            className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={handleLongitudeChange}
          />
        </div>
        <div>
          <input
            className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={handleLatitudeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Peta;
