import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logout from "../../assets/logout.svg";
import { AuthContext } from "../../contexts/AuthContext";
NavbarMenu.propTypes = {};

function NavbarMenu(props) {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logoutUserClick = () => logoutUser();
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Navbar.Brand className="font-weight-bolder text-white">
        <img
          src={logo}
          alt="learnItlogo"
          width="32"
          height="32"
          className="mr-2"
        />
        Learn IT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link className="font-weight-bolder text-white" disabled>
        Welcome {username}
      </Nav.Link>
      <Button
        variant="secondary"
        className="font-weight-bolder text-white"
        onClick={logoutUserClick}
      >
        <img
          src={logout}
          alt="logoutIcon"
          width="32"
          height="32"
          className="mr-2"
        />
      </Button>
    </Navbar>
  );
}

export default NavbarMenu;
