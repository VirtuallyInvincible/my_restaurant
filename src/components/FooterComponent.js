import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
          <div className="footer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <p>©Copyright 2021 Shai's Restaurant</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;