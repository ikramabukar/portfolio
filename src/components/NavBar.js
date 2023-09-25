// imports

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{
            fontSize: "23px",
            fontFamily: "Inclusive Sans",
            marginLeft: "25px",
            fontWeight: "700",
            letterSpacing: "3px",
          }}
        >
          Ikram Abukar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{
              maxHeight: "100px",
              fontFamily: "Inclusive Sans",
              fontSize: "18px",
              padding: "0, 25px",
              letterSpacing: "3px",
            }}
            navbarScroll={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxHeight: "150px",
            }}
          >
            <Nav.Link
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "700",
              }}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "700",
              }}
              as={Link}
              to="About"
            >
              About
            </Nav.Link>
            <Nav.Link
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "700",
              }}
              as={Link}
              to="Projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "700",
              }}
              as={Link}
              to="Contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
