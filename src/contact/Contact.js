import "./contact.css";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import ContactImg from "../assets/um.jpg";
const Contact = () => {
  return (
    <div className="contact3 py-5" id="Kontakt">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="card-shadow">
              <Image src={ContactImg} fluid />
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-2">Quick Contact</h1>
              <Form className="mt-4">
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="email" placeholder="email address" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="text" placeholder="phone" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="message"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Button
                      type="submit"
                      className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                    >
                      <span> SUBMIT</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col lg={12}>
            <div className="card mt-4 border-0 mb-4">
              <Row>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mx-3 align-self-center">
                      <Image src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Address</h6>
                      <p>
                        601 Sherwood Ave.
                        <br /> San Bernandino
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <Image src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Phone</h6>
                      <p>
                        251 546 9442
                        <br /> 630 446 8851
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <Image src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Email</h6>
                      <p>
                        info@wrappixel.com
                        <br /> 123@wrappixel.com
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
