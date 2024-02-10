import { Navbar, Nav, Image, Row, Col } from "react-bootstrap";
import "../header/header.css";
import Logo from "../assets/logo-mini.png";
import { useEffect, useRef, useState } from "react";

function Header() {
  let [activeLink, setActiveLink] = useState("Heim");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.href = "#" + entry.target.id;
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    ); // Change threshold as needed

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <Navbar id="header" className="nav-bar-bg w-100 px-5 d-block border-bottom">
      <Row className="align-items-center justify-content-between">
        <Col lg={4} md={12}>
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-responsive w-50" />
          </Navbar.Brand>
        </Col>
        <Col lg={8} md={12}>
          <Nav className="d-flex gap-3 justify-content-end">
            <Nav.Link
              href="#Heim"
              className={
                activeLink === "Heim"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
            >
              Heim
            </Nav.Link>
            <Nav.Link
              href="#Um"
              className={
                activeLink === "Um"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
            >
              Um
            </Nav.Link>
            <Nav.Link
              href="#Dienstleistungen"
              className={
                activeLink === "Dienstleistungen"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
            >
              Dienstleistungen
            </Nav.Link>
            <Nav.Link
              href="#Kontakt"
              className={
                activeLink === "Kontakt"
                  ? "roboto-medium header-nav active"
                  : "roboto-medium header-nav"
              }
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
