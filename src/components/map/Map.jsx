import React, {useRef, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
    width: '400px',
    height: '250px',
    borderRadius: '20px',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.15)'
};

const center = {
    lat:42.87955706043299, 
    lng: 74.61801862875099,
}

const markerPosition = {
  lat: 42.879451, 
  lng: 74.617929
}

const defaultOptions ={
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false
}


const Map = () => {

    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map){
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map){
        mapRef.current = undefined;
    }, [])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
      })


  return (
    <>
        {isLoaded 
        ? <GoogleMap 
            mapContainerStyle={containerStyle}
            options={defaultOptions}
            center={center} 
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount} >
            <Marker 
              position={markerPosition} />
          </GoogleMap> 
        : 
          <h2>Loading...</h2> }

    </>
  )
}

export default Map