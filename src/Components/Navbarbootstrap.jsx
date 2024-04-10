import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./Home";
import Signup from "./Signup";
import Pricing from "./Pricing";

function Navbarbootstrap() {
  const [showComponent, setShowComponent] = useState(null);

  const handleLinkClick = (component) => {
    setShowComponent(component);
  };

  const handleSignupSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleLinkClick(<Home />)}>Home</Nav.Link>
            <Nav.Link
              onClick={() =>
                handleLinkClick(<Signup onSubmit={handleSignupSubmit} />)
              }
            >
              Signup
            </Nav.Link>
            <Nav.Link onClick={() => handleLinkClick(<Pricing />)}>
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">{showComponent}</Container>
    </>
  );
}

export default Navbarbootstrap;
