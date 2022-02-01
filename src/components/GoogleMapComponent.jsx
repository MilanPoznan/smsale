import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export default function GoogleMapComponent() {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  return (
    <Wrapper apiKey={"YOUR_API_KEY"} >
      <div ref={ref} />
    </Wrapper>
  )
}
