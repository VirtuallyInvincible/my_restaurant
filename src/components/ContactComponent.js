import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';

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

    handleSubmit(event) {
      //var message = 'Current state is: ' + JSON.stringify(this.state);
      //console.log(message);
      alert("Your message has been received. We'll get back to you as soon as possible. Thank you.");
      event.preventDefault();
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
      const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

      return (
        <div className="container">
          <div className="row row-content">
            <div className="col-12">
              <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstname" md={2}>First Name</Label>
                  <Col md={10}>
                    <Input type="text" id="firstname" name="firstname"
                           placeholder="First Name"
                           value={this.state.firstname}
                           onChange={this.handleInputChange}
                           invalid={errors.firstname !== ''}
                           onBlur={this.handleBlur('firstname')}
                           />
                    <FormFeedback>{errors.firstname}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastname" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Input type="text" id="lastname" name="lastname"
                           placeholder="Last Name"
                           value={this.state.lastname}
                           onChange={this.handleInputChange}
                           invalid={errors.lastname !== ''}
                           onBlur={this.handleBlur('lastname')}
                           />
                    <FormFeedback>{errors.lastname}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                    <Input type="tel" id="telnum" name="telnum"
                           placeholder="Tel. number"
                           value={this.state.telnum}
                           onChange={this.handleInputChange}
                           invalid={errors.telnum !== ''}
                           onBlur={this.handleBlur('telnum')}
                           />
                    <FormFeedback>{errors.telnum}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" id="email" name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleInputChange}
                           invalid={errors.email !== ''}
                           onBlur={this.handleBlur('email')}
                           />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox"
                            name="agree"
                            checked={this.state.agree}
                            onChange={this.handleInputChange} /> {' '}
                        <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 3, offset: 1}}>
                    <Input type="select" name="contactType"
                        value={this.state.contactType}
                        onChange={this.handleInputChange}>
                      <option>Tel.</option>
                      <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Input type="textarea" id="message" name="message"
                        rows="12"
                        value={this.state.message}
                        onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Our Address</h5>
              <address>
                Jabutinsky 5 st.<br />
                Rehovot<br />
                Israel<br />
                <i className="fa fa-phone"></i>: 052-000000<br />
                <i className="fa fa-fax"></i>: 052-111111<br />
                <i className="fa fa-envelope"></i>: <a href="mailto:shai_restaurant@gmail.com">shai_restaurant@gmail.com</a><br />
              </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
              <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
              <div className="btn-group" role="group">
                <a role="button" className="btn btn-primary" href="tel:052-000000"><i className="fa fa-phone"></i> Call</a>
                <a role="button" className="btn btn-success" href="mailto:shai_restaurant@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
              </div>
            </div>
          </div>
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Contact Us</h3>
              <hr />
            </div>
          </div>
        </div>
      );
    }
}

export default Contact;