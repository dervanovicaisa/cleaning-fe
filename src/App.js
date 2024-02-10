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
      <Row className="border-bottom pt-sticky" id="Heim" data-section>
        <Col lg={6} className="left-text px-0">
          <div className="left-description pt-5 pb-4">
            <div className="m-auto w-75 d-grid gap-4">
              <h2 className="title roboto-medium">
                WIR BIETEN ALLE ARTEN von REINIGUNGEN an
              </h2>
              <p className="paragraph roboto-regular pb-0 mb-1">
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
              <Button href="#Um" className="purple-bg">
                LERNEN SIE
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} className="right-image px-0">
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
