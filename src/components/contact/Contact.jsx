import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <div className="container parentCon">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h4>Contact Us</h4>
            <hr />
            <div className="myIcons">
              <div class="contact-item">
                <i className="fa fa-address-book" id="myIcon" />
                <p id="contact-p">Contact Us</p>
              </div>
              <div className="contact-item">
                <i className="fa fa-phone" id="myIcon" />
                <p>08176919801</p>
              </div>
              <div className="contact-item">
                <i class="fa fa-envelope" id="myIcon" />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-8">
            <div>
              <p id="form-title">
                Fill out the form below and a representative will contact you by
                e-mail or phone within 24 business hours.
              </p>
            </div>
            <div>
              <Form>
                <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                 </Form.Group>
                 <div className="spaceFile">
                 <Form.Label>File</Form.Label>
                 <Form.Control
                 type="file"
                 required
                 name="Select File"/>
                 </div>
              </Form>
                
            </div>
             <div className="btn-submit">
                <button type="submit" id="btnSub">Submit File</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
