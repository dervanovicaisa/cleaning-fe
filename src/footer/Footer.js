import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { Envelope, Phone } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer bg="light" className="text-center text-lg-start text-muted">
      <section className="border-top">
        <div className="text-center text-md-start mt-5 w-90 m-auto">
          <Row>
            <Col lg="5" md="4" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Unsere Dienstleistungen
              </h6>
              <Row className="mx-auto">
                <Col className="mb-4 px-0">
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Winterdienst
                    </a>
                  </p>
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Glasreinigung
                    </a>
                  </p>
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Büroreinigung
                    </a>
                  </p>
                </Col>
                <Col className="mx-auto mb-4">
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Teppichreinigung
                    </a>
                  </p>
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Reinigungsdienst
                    </a>
                  </p>
                  <p>
                    <a
                      href="/"
                      className="text-reset text-hover text-decoration-none"
                    >
                      Baugrobreinigung
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col lg="3" md="3" className="mb-4 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Nützliche Links</h6>
              <p>
                <a
                  href="#Heim"
                  className="text-reset text-hover text-decoration-none"
                >
                  Heim
                </a>
              </p>
              <p>
                <a
                  href="#Um"
                  className="text-reset text-hover text-decoration-none"
                >
                  Um
                </a>
              </p>
              <p>
                <a
                  href="#Dienstleistungen"
                  className="text-reset text-hover text-decoration-none"
                >
                  Dienstleistungen
                </a>
              </p>
              <p>
                <a
                  href="#Kontakt"
                  className="text-reset text-hover text-decoration-none"
                >
                  Kontakt
                </a>
              </p>
            </Col>

            <Col lg="3" md="3" className="mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
              <p>
                <Envelope className="me-3 text-purple" />
                <a
                  href="mailto:hadzajlicmarija@gmail.com"
                  className="text-decoration-none text-reset text-hover"
                >
                  hadzajlicmarija@gmail.com
                </a>
              </p>
              <p>
                <Phone className="me-3 text-purple" /> + 01 60 90 37 26 34
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <div className="text-center p-4 bg-purple text-light">
        © 2024 Urheberrecht:
        <a className="text-reset fw-bold mx-2" href="#Heim">
          M&M HADZAJLIC REINIGUND
        </a>
      </div>
    </footer>
  );
};

export default Footer;
