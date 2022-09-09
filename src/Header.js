import React from 'react';

import Navbar from 'React-Bootstrap/Navbar';

import Nav from 'React-Bootstrap/Nav';

const Header = () => {

    return (
        <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
       </Navbar>
        </div>
      );
};
 
export default Header;
