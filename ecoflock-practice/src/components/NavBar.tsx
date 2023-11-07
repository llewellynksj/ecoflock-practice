import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo_full.png";

const NavBar = () => {
  return (
    <Navbar
      expand="sm"
      className="align-items-end py-0 d-flex justify-content-between"
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" height="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
