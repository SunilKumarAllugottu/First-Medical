import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "80vh",
    width: "100%",
    padding:'50px',
  };

  const defaultCenter = {
    lat: 17.4065,
    lng: 78.4772,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA4dqzav84vNoRMa3QqI4-GuzCDIml9XmE">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
