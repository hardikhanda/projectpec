// StudentDashboard.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';


const Navi = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><img src="https://pec.ac.in/pecadmissions_bdesign/sites/default/files/pec_seal_alter.png" className="navbar-logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#inbox">Inbox</Nav.Link>
          <Nav.Link href="#tasks">My Tasks</Nav.Link>
        </Nav>
        <Nav className="ml-auto" >
          <Button variant="success" className="center-button">
            <FontAwesomeIcon icon={faPlus} /> Create
          </Button>
          <Nav.Link href="#user"><img src="https://www.freeiconspng.com/uploads/blue-circle-png-5.png" className="navbar-logo"></img></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;