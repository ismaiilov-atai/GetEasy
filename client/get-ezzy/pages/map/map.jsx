import { useState, useCallback, memo, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 42.87572823005869,
  lng: 74.60364818572998
};



function Map({ setShowPopup, pickUpAddressSelected, setAddress }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "<api>"
  })

  const [map, setMap] = useState(null)
  const [pointA, setPointA] = useState({});
  const [pointB, setPointB] = useState({});

  const pointsArray = [pointA, pointB];

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  function pickDestinations(e) {
    if (!pickUpAddressSelected) setPointA({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    else {
      setPointB(() => {
        const secondPint = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setAddress([pointA, secondPint]);
        return secondPint;
      });
    }
    setShowPopup(true);
  }

  let markers;
  if (pointsArray) {
    markers = [pointA, pointB].map((marker, indx) => {
      if (marker) {
        return <Marker
          key={indx}
          position={{
            lat: +marker.lat,
            lng: +marker.lng
          }} />
      }
    });
  }


  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={pickDestinations}
      >
        {
          markers
        }
      </GoogleMap>
    </>
  ) : <></>

}



export default memo(Map);

