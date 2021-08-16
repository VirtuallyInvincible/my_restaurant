import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => ((!val) || (val.length <= len));
const minLength = (len) => (val) => (val && val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName: '',
        lastName: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: '',
        touched: {
          firstname: false,
          lastname: false,
          telnum: false,
          email: false
        }
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(values) {
      alert("Your message has been received. We'll get back to you as soon as possible. Thank you.");
    }

    handleBlur = (field) => (event) => {
      this.setState({
        touched: { ...this.state.touched, [field]: true }
      });
    }

    validate(firstname, lastname, telnum, email) {
      const errors = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: ''
      };

      if (firstname !== undefined && this.state.touched.firstname && firstname.length < 3) {
        errors.firstname = 'The first name should be at least 3 characters long.';
      } else if (firstname !== undefined && this.state.touched.firstname && firstname.length > 10) {
        errors.firstname = 'The first name should be no more than 10 characters long.';
      }

      if (lastname !== undefined && this.state.touched.lastname && lastname.length < 3) {
        errors.lastname = 'The last name should be at least 3 characters long.';
      } else if (lastname !== undefined && this.state.touched.lastname && lastname.length > 10) {
        errors.lastname = 'The last name should be no more than 10 characters long.';
      }

      const reg = /^\d+$/;
      if (telnum !== undefined && this.state.touched.telnum && !reg.test(telnum)) {
        errors.telnum = 'The phone number should contain only digits';
      }

      if (email !== undefined && this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
        errors.email = 'The email should contain a @';
      }

      return errors;
    }

    render() {
      //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

      return (
        <div className="container">
          <div className="row row-content">
            <div className="col-12">
              <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="firstname" md={2}>First Name</Label>
                  <Col md={10}>
                    <Control.text model=".firstname" 
                                  id="firstname" 
                                  name="firstname"
                                  placeholder="First Name"
                                  className="form-control"
                                  validators={{required, minLength: minLength(2)}}
                                  />
                    <Errors className="text-danger"
                            model=".firstname"
                            show="touched"
                            messages={{
                              required: 'Required. ',
                              minLength: 'The first name must be at least 2 characters long.'
                            }}
                            />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="lastname" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Control.text model=".lastname" 
                                  id="lastname" 
                                  name="lastname"
                                  placeholder="Last Name"
                                  className="form-control"
                                  validators={{required, minLength: minLength(2)}}
                                  />
                    <Errors className="text-danger"
                            model=".lastname"
                            show="touched"
                            messages={{
                              required: 'Required. ',
                              minLength: 'The last name must be at least 2 characters long.'
                            }}
                            />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                    <Control.text model=".telnum"
                                  id="telnum" 
                                  name="telnum"
                                  placeholder="Tel. number"
                                  className="form-control"
                                  validators={{
                                    required, minLength: minLength(8), maxLength: maxLength(12), isNumber
                                  }}
                                  />
                    <Errors className="text-danger"
                            model=".telnum"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be at least 8 digits long. ',
                                maxLength: 'Must be no longer than 12 digits. ',
                                isNumber: 'A phone number must contain only of digits.'
                            }}
                            />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Control.text model=".email"
                                  id="email" 
                                  name="email"
                                  placeholder="Email"
                                  className="form-control"
                                  validators={{
                                    required, validEmail
                                  }}
                                  />
                    <Errors className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                validEmail: 'Invalid Email Address.'
                            }}
                            />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 6, offset: 2}}>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox model=".agree"
                                          name="agree"
                                          className="form-check-input"
                                          /> {' '}
                        <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{size: 3, offset: 1}}>
                    <Control.select model=".contentType"
                                    name="contactType"
                                    className="form-control">
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="message" md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Control.textarea model=".message" 
                                      id="message" 
                                      name="message"
                                      rows="12"
                                      className="form-control"
                                      />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </div>

          <div className="row row-content" style={{minHeight: 'auto'}}>
            <div className="col-8 col-sm-5">
              <h3>
                Or Contact Us Directly
              </h3>
              <i className="fa fa-phone"></i>: <a href="tel:+972 000000000">+972 000000000</a><br />
              <i className="fa fa-fax"></i>: +972 000000000<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:shai_hummus@food.com">shai_hummus@food.com</a><br />
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Address</h5>
              <address>
                5 Jabutinsky st.<br />
                Rehovot<br />
                Israel<br />
              </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
              <h5>Map of our Location</h5>
            </div>
          </div>
        </div>
      );
    }
}

export default Contact;