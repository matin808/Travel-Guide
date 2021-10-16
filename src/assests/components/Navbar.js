import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Earth from "../images/earth.png";
import "../style/Navbar.css";


const HomeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img className="home_icon" src={Earth} alt="" />
          <span className = "nav_header">Travel Guide</span>
        </NavbarBrand>

        <NavbarToggler className="nav_toggler" onClick={toggle} />
        <Collapse className = "nav_tog" isOpen={isOpen} navbar>
          <Nav className="ms-auto header__links" navbar>
            <NavItem>
              <NavLink className="nav_link" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav_link" href="/advisor">
                Advisior
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav_link" href="/info">
                Info
              </NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
