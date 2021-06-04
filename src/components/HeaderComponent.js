import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
          <React.Fragment>
            <Navbar dark>
              <div className="container">
                <NavbarBrand href="/">Shai's Restaurant</NavbarBrand>
              </div>
            </Navbar>
            <Jumbotron>
              <div className="container">
                <div className="row rowHeader">
                  <div className="col-12 col-sm-6">
                    <h1>Shai's Restaurant</h1>
                    <p>The world's best hummus, and more!</p>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;