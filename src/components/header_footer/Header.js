import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Container
} from "reactstrap";

import Logo from "../../resources/logo.png";
import user from "../../resources/user.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color=""  expand="md" className="fixed-top main-nav pt-4">
          <div className="container-fluid px-5">
          <NavbarBrand href="/">
            <img src={Logo} alt="" className="movie__logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}><ion-icon name="menu" size="large" style={{color: "#fff"}}></ion-icon></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="pl-5 navigation" navbar>
              <NavItem>
                <NavLink href="#" className="main-nav-link py-1 mx-1">Browse</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="main-nav-link py-1 mx-1">My list</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="main-nav-link py-1 mx-1">Top picks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="main-nav-link py-1 mx-1">Recent</NavLink>
              </NavItem>
            </Nav>

            <div className="input-class ml-5">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Search for a title"
              className="searchInput"
            />
          </div>
          </Collapse>
          
          
          </div>
          
        </Navbar>
      </div>
    );
  }
}

export default Header;
