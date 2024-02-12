import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const Maps = ({ apiKey, address }) => {
  const [lat, setLat] = useState(38.891289);
  const [lng, setLng] = useState(-77.020065);

  console.log(address)

  const center = {
    lat,
    lng
  };

  useEffect(() => {
    const fetchGeoCoordinates = async () => {
      try {
        let geoAddress = address.split(" ").join("+");
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geoAddress}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch geo-coordinates');
        }
        const data = await response.json();
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setLat(lat);
          setLng(lng);
        } else {
          console.error('No results found for the provided address');
        }
      } catch (error) {
        console.error('Error fetching geo-coordinates:', error);
      }
    };

    fetchGeoCoordinates();
  }, [address, apiKey]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(new window.google.maps.LatLng(center.lat, center.lng));
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : <></>;
};

export default React.memo(Maps);
