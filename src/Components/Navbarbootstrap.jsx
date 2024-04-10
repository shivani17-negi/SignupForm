import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Pricing from "./Pricing";

function Navbarbootstrap() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/product" className="nav-link">
              Product
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarbootstrap;
