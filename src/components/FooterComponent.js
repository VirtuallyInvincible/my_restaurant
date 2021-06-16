import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
          <div className="footer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                  </ul>
                </div>
                <div className="col-7 col-sm-5">
                  <h5>Our Address</h5>
                  <address>
                    5, Jabutinsky st.<br />
                    Rehovot<br />
                    Israel<br />
                    <i className="fa fa-phone fa-lg"></i>: +972 8957435<br />
                    <i className="fa fa-fax fa-lg"></i>: +972 8957434<br />
                    <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:shai_hummus@food.net">
                        shai_hummus@food.net</a>
                  </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                  <div className="text-center">
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <p>©Copyright 2021 Shai Restaurant</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;