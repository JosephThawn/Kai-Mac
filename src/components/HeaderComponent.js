import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// Uncontrolled Forms
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }
  //what is this {this.username.value} value is using for what? and this.remeber.checked?
  //what is the effect of using handleLogin(event) {}

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className=" card-body text-center col">
                <div className=" btn btn-outline-secondary">
                  <h1>Kai Burmese Cuisine</h1>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky="top" expand="lg">
          <div className="container">
            {/* <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="30"
                alt="NuCamp Logo"
              />
            </NavbarBrand> */}
            <NavbarToggler
              onClick={this.toggleNav}
              className="btn btn-danger"
            />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                {/* <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-list fa-lg">Home</i>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="nav-link">Menu</i>

                    {/* <i className="fa-solid  fa-shake">Menu</i> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="nav-link">About</i>

                    {/* <i className="fa-solid  fa-shake">Directory</i> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="nav-link">Location</i>

                    {/* <i className="fa-solid f fa-shake">Contact</i> */}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
