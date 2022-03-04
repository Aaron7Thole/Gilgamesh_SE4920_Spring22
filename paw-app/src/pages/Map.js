import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import * as parkData from "../parks.json";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


function GetMap({latitude, longitude}) {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude},
      map,
      title: "Marker"
    }); 
    return marker;
  }
  const defaultProps = {
    center: {
      lat: 38.7577,
      lng: -93.7405
    },
    zoom: 13
  }

  return (
<div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
          <Marker //key={park.id}
          lat={38.757739}
          lng={-93.741559}
          />
          <Marker
          lat={38.770939}
          lng={-93.761933}
          />
        
      </GoogleMapReact>
    </div>
  );
}


export default GetMap;
