import InfoWindow from './InfoWindow';
import './CssPages/Marker.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Marker = (props) => {
    const { color, name, id} = props;
    const [show, setShow] = useState(false);
    return (
     <>
      <div className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        onClick={() => setShow(!show)}
      />
      <div className='pulse' />
      {show ? <InfoWindow setTrigger={() => setShow(false)} /> : ""}
      </>
    );
  };

  export default Marker;