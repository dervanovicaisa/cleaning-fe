import { Button, Col, Image, Row } from "react-bootstrap";
import "./App.css";
import CleanImg from "./assets/cleaning-service-hero.jpeg";
import Header from "./header/Header";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
function App() {
  return (
    <div id="app">
      <Header />
      {/* home */}
      <Row className="border-bottom" id="Heim">
        <Col
          xxl={6}
          xl={6}
          lg={12}
          md={12}
          sm={12}
          className="m-auto py-xxl-0 py-xl-0 py-lg-5 py-md-5 py-sm-5 inner-bg"
        >
          <Row className="gap-4 mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-3 mx-sm-3">
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className="text-overflow"
            >
              <h2 className="title roboto-medium">
                WIR BIETEN ALLE ARTEN von REINIGUNGEN an
              </h2>
              <p className="paragraph roboto-regular mb-1 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
                Willkommen bei{" "}
                <span className="roboto-medium"> M&M HADZAJLIC REINIGUND </span>
                , wo Sauberkeit und Exzellenz Hand in Hand gehen! Unsere
                professionellen Reinigungsdienstleistungen sind darauf
                ausgerichtet, Ihre Erwartungen zu übertreffen und makellose
                Räume in Ihrem Zuhause oder Büro zu schaffen. Mit einem
                engagierten Team von Fachleuten bieten wir akribische
                Reinigungsdienste mit hochwertigen Materialien und Techniken. Ob
                regelmäßige Reinigung oder Spezialreinigung, wir garantieren
                herausragende Ergebnisse. Von der ersten Beratung bis zur
                Fertigstellung legen wir Wert auf Pünktlichkeit, Zuverlässigkeit
                und Transparenz, um jedem Kunden ein erstklassiges
                Reinigungserlebnis zu bieten. Kontaktieren Sie uns noch heute,
                um mehr über unsere Dienstleistungen zu erfahren und Ihren
                Termin zu vereinbaren!
              </p>
              <p className="text-left roboto-regular mb-1 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block">
                Willkommen bei{" "}
                <span className="roboto-medium"> M&M HADZAJLIC REINIGUND </span>
                , wo Sauberkeit und Exzellenz Hand in Hand gehen! Unsere
                professionellen Reinigungsdienstleistungen sind darauf
                ausgerichtet, Ihre Erwartungen zu übertreffen und makellose
                Räume in Ihrem Zuhause oder Büro zu schaffen. Mit einem
                engagierten Team von Fachleuten bieten wir akribische
                Reinigungsdienste mit hochwertigen Materialien und Techniken.
                Kontaktieren Sie uns noch heute, um mehr über unsere
                Dienstleistungen zu erfahren und Ihren Termin zu vereinbaren!
              </p>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
              <Button href="#Um" className="purple-bg w-100">
                LERNEN SIE
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          className="px-0 d-xxl-block d-xl-blcok d-lg-none d-md-none d-sm-none"
        >
          <Image className="img-responsive w-100" src={CleanImg} />
        </Col>
      </Row>
      {/* about us */}
      <About />
      {/* services */}
      <Services />
      {/* contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
