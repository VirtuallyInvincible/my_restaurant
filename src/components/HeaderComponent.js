import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    handleLogin(event) {
      this.toggleModal();
      event.preventDefault();
    }

    render() {
        return (
          <div className="header">
            <Navbar dark expand="md">
              <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                          <Label htmlFor="username">Username</Label>
                          <Input type="text" id="username" name="username"
                              innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input type="password" id="password" name="password"
                              innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                              Remember me
                          </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                      </Form>
                    </ModalBody>
                </Modal>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
            <Jumbotron style={{padding: '5px', background: 'light-blue', color: 'blue'}}>
              <div className="container">
                <h1>Shai's Restaurant</h1>
                <p>The world's best hummus!</p>
              </div>
            </Jumbotron>
          </div>
        );
    }
}

export default Header;