import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-title mt-2">
          <h2>
            <span>Contact</span> Us
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <div className="container mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h4>Location:</h4>
                <address>
                  6912 S Lewis Ave <br />
                  Tulsa, OK 74136
                  <br />
                </address>{" "}
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday: <br />
                  11:00 AM - 2300 PM
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <h4>Email:</h4>
                <p>
                  info@example.com <br />
                  contact@example.com
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <h4>Call:</h4>
                <p>
                  +1 5589 55488 51 <br />
                  +1 5589 22475 14
                </p>
              </div>
            </div>

            {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required>
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
