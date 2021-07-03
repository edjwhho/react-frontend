import Alert from 'react-bootstrap/Alert';
import React, { useReducer , useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container' ;
import './Topbar.css';
import Aggrid from '../Aggrid/Aggrid.jsx';
import Boot from '../Alert/boot';
import Child from '../Child/Child.jsx';
import Form from '../Form/Form.jsx';
import Tables from '../Table/Table';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Topbar(props) {
    const [show, setShow] = useState(true);
    const [value, setValue] = useState("eddie");

    function handleChange(newValue) {
      console.log("parent rendering...")
      setValue(newValue);
      }
  
    return (
      <>
      <Router>
        <Navbar bg="dark" expand="lg" fixed="top" className="navbar navbar-expand-lg navbar-dark">
        <Container className='Container'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Nav.Link href="Form">Form</Nav.Link>
              <Nav.Link href="Aggrid">Aggrid</Nav.Link>
              <Nav.Link href="Boot">Boot</Nav.Link>
              <Nav.Link href="Child">Child</Nav.Link>
              <Nav.Link href="Tables">Tables</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div>
            <Switch>
              <Route path="/Form">
                <Form />
              </Route>
              <Route path="/Aggrid">
                <Aggrid />
              </Route>
              <Route path="/Boot">
                <Boot />
              </Route>
              <Route path="/Child">
                <Child value={value} onChange={handleChange}/>
              </Route>
              <Route path="/Tables">
                <Tables />
              </Route>
            </Switch>
        </div>
        </Router>
      </>
    );
  }

export default Topbar