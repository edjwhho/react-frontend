import Alert from 'react-bootstrap/Alert';
import React, { useReducer , useState } from 'react';
import Button from 'react-bootstrap/Button';
import './boot.css';

function Boot() {
    const [show, setShow] = useState(true);
  
    return (
      <div className='bootcont'>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
        {!show && <Button className ='buttonboot' onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
    );
  }

export default Boot