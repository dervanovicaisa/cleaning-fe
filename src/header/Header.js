import { Navbar, Nav, Image, Row, Col } from "react-bootstrap";
import "../header/header.css";
import Logo from "../assets/logo-mini.png";
function Header() {
  let currentActive = "";
  return (
    <Navbar className="nav-bar-bg w-100 px-5 d-block border-bottom">
      <Row className="align-items-center justify-content-between">
        <Col lg={4} md={12}>
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-responsive w-50" />
          </Navbar.Brand>
        </Col>
        <Col lg={8} md={12}>
          <Nav
            className="d-flex gap-3 justify-content-end
        "
          >
            <Nav.Link
              href="#Heim"
              className={
                currentActive === "heim"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
              onClick={() => (currentActive = "heim")}
            >
              Heim
            </Nav.Link>
            <Nav.Link
              href="#Um"
              className={
                currentActive === "um"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
              onClick={() => (currentActive = "um")}
            >
              Um
            </Nav.Link>
            <Nav.Link
              href="#Dienstleistungen"
              className={
                currentActive === "dienstleistungen"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
              onClick={() => (currentActive = "dienstleistungen")}
            >
              Dienstleistungen
            </Nav.Link>
            <Nav.Link
              href="#Kontakt"
              className={
                currentActive === "kontakt"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
              onClick={() => (currentActive = "kontakt")}
            >
              Kontakt
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
}

export default Header;
