import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarTop.css";
import logo from "../logo.png";
import CustomModal from "./CustomModal.js";

function NavbarTop() {
  const [loginAlertShow, setLoginAlertShow] = useState(false);
  const handleLoginAlertShow = () => setLoginAlertShow(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="auto"
              height="48"
              className="d-inline-block align-center"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center" style={{ flex: 1 }}>
              <Nav.Link as={Link} to="/">
                <span className="nav-links">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                <span className="nav-links">Product</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <span className="nav-links">About us</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/support">
                <span className="nav-links">Support</span>
              </Nav.Link>
            </Nav>
            <Button
              variant="primary"
              className="btn-primary"
              onClick={handleLoginAlertShow}
            >
              Login
            </Button>
            <CustomModal
              show={loginAlertShow}
              setShow={setLoginAlertShow}
              title={"기능 준비 중"}
              message={"해당 기능은 현재 준비 중입니다."}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
