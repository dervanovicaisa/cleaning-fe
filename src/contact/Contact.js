import "./contact.css";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import ContactImg from "../assets/um.jpg";
const Contact = () => {
  return (
    <div className="contact3 py-5" id="Kontakt" data-section>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="card-shadow">
              <Image src={ContactImg} fluid />
            </div>
          </Col>
          <Col lg={6}>
            <h1 className="font-weight-light">Schnellkontakt</h1>
            <div className="contact-box ml-3">
              <Form className="mt-4">
                <Row className="gap-3">
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="email" placeholder="E-mail adresse" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control type="text" placeholder="Telefon" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Nachricht"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Button
                      type="submit"
                      className="btn btn-purple mt-3 text-white border-0 px-3 py-2 w-100"
                    >
                      <span> Senden</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
