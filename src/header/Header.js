import {
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Logo from "../assets/logo-mini.png";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import { List } from "react-bootstrap-icons";
function Header() {
  const [activeLink, setActiveLink] = useState("Heim");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id;
            setActiveLink(targetId);

            // Deactivate other active links
            const activeLinks = document.querySelectorAll("a.active");
            activeLinks.forEach((link) => {
              if (link.hash !== `#${targetId}`) {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <Navbar
      id="header"
      className="nav-bar-bg w-100 px-lg-5 px-2 d-block border-bottom"
    >
      <Row className="align-items-center justify-content-between d-lg-flex d-md-flex d-none">
        <Col lg={4} md={4} className="text-lg-start text-center">
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-responsive w-50" />
          </Navbar.Brand>
        </Col>
        <Col lg={8} md={5}>
          <Nav className="d-flex gap-3 justify-content-lg-end justify-content-center">
            {["Heim", "Um", "Dienstleistungen", "Kontakt"].map((section) => (
              <NavLink
                key={section}
                section={section}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            ))}
          </Nav>
        </Col>
      </Row>
      <Row className="d-lg-none d-md-none d-flex align-items-center justify-content-start px-2">
        <Col className="col-9">
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-responsive w-25" />
          </Navbar.Brand>
        </Col>
        <Col className="text-end">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic-button" variant="light">
              <List />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              {["Heim", "Um", "Dienstleistungen", "Kontakt"].map((section) => (
                <NavLink
                  key={section}
                  section={section}
                  activeLink={activeLink}
                  setActiveLink={setActiveLink}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Navbar>
  );
}

function NavLink({ section, activeLink, setActiveLink }) {
  // Click event handler for links
  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
  };

  return (
    <Nav.Link
      href={`#${section}`}
      className={`roboto-medium header-nav ${
        activeLink === section && "active"
      }`}
      onClick={() => handleLinkClick(section)}
    >
      {section}
    </Nav.Link>
  );
}

export default Header;
