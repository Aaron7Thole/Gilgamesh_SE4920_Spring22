import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import * as parkData from "../parks.json";
import "./CssPages/Map.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


function GetMap({latitude, longitude}) {
  // const renderMarkers = (map, maps) => {
  //   let marker = new maps.Marker({
  //     position: { lat: latitude, lng: longitude},
  //     map,
  //     title: "Marker"
  //   }); 
  //   return marker;
  // }
  const defaultProps = {
    center: {
      lat: 39.0997,
      lng: -94.578331
    },
    zoom: 13
  }

  return (
<div style={{ height: '85vh', width: '95%', margin: '3rem auto' }}>
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
          lat={39.1532}
          lng={-94.5765}
          />
          <Marker
          lat={39.2339}
          lng={-94.3885}
          />
          <Marker
          lat={39.0668}
          lng={-94.4239}
          />
          <Marker
          lat={38.9368}
          lng={-94.3826}
          />
          <Marker
          lat={39.0295}
          lng={-94.2356}
          />
          <Marker
          lat={38.8720}
          lng={-94.5068}
          />
          <Marker
          lat={38.9318}
          lng={-94.6135}
          />
          <Marker
          lat={38.9974}
          lng={-94.5275}
          />
          <Marker
          lat={38.8379}
          lng={-94.7591}
          />
          <Marker
          lat={38.9151}
          lng={-94.7316}
          />
          <Marker
          lat={39.11402}
          lng={-94.61846}
          />
          <Marker
          lat={39.18449}
          lng={-94.69486}
          />
          <Marker
          lat={38.97744}
          lng={-94.79751}
          />
          <Marker
          lat={39.06606}
          lng={-94.70999}
          />
          <Marker
          lat={39.10546}
          lng={-94.58186}
          />
          <Marker
          lat={39.06496}
          lng={-94.58075}
          />
          <Marker
          lat={39.09930}
          lng={-94.58236}
          />
          <Marker
          lat={39.11173}
          lng={-94.79552}
          />
        
      </GoogleMapReact>
    </div>
  );
}


export default GetMap;
