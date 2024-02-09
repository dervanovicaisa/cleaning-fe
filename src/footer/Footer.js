import "./footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoImg from "../assets/logo-mini.png";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  Linkedin,
  Github,
  House,
  Envelope,
  Phone,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer bg="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <Facebook color="secondary" />
          </a>
          <a href="/" className="me-4 text-reset">
            <Twitter color="secondary" />
          </a>
          <a href="/" className="me-4 text-reset">
            <Google color="secondary" />
          </a>
          <a href="/" className="me-4 text-reset">
            <Instagram color="secondary" />
          </a>
          <a href="/" className="me-4 text-reset">
            <Linkedin color="secondary" />
          </a>
          <a href="/" className="me-4 text-reset">
            <Github color="secondary" />
          </a>
        </div>
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-center">
                <Image src={LogoImg} className="w-75" />
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Laravel
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <House className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <Envelope className="me-3" />
                info@example.com
              </p>
              <p>
                <Phone className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <Phone className="me-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold mx-2"
          href="https://www.behance.net/aiadervanovi"
        >
          Aisa D.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
