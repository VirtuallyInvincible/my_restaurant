import React from 'react';

function Contact(props) {
    return(
      <div className="container">
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
              <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:shai_restaurant@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;