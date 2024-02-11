import { Col, Image, Row } from "react-bootstrap";
import "./about.css";
import UmImage from "../assets/um.webp";
function About() {
  return (
    <div id="Um" data-section>
      <div className="py-5 w-90 m-auto">
        <Row className="justify-content-end gap-5 py-3">
          <Col>
            <Row className="gap-3 py-2">
              <Col>
                <h3>Qualität und Zuverlässigkeit</h3>
                <p>
                  Qualität und Zuverlässigkeit: Unser Unternehmen zeichnet sich
                  durch erstklassige Qualität und Zuverlässigkeit aus. Wir legen
                  größten Wert darauf, dass jede Reinigungsaufgabe gründlich und
                  professionell ausgeführt wird. Unser Team besteht aus
                  erfahrenen Fachkräften, die mit modernsten Reinigungstechniken
                  und hochwertigen Produkten arbeiten, um optimale Ergebnisse zu
                  erzielen. Sie können sich darauf verlassen, dass Ihre
                  Räumlichkeiten stets sauber und gepflegt sind, wenn Sie sich
                  für unsere Dienstleistungen entscheiden.
                </p>
              </Col>
              <Col>
                <h3> Maßgeschneiderte Lösungen</h3>
                <p>
                  Maßgeschneiderte Lösungen: Wir verstehen, dass jeder Kunde
                  unterschiedliche Anforderungen und Bedürfnisse hat. Deshalb
                  bieten wir maßgeschneiderte Reinigungslösungen an, die genau
                  auf Ihre individuellen Anforderungen zugeschnitten sind. Ob es
                  sich um regelmäßige Unterhaltsreinigung, Spezialreinigung oder
                  Bauendreinigung handelt, wir passen unsere Dienstleistungen
                  Ihren Bedürfnissen an, um sicherzustellen, dass Sie die
                  bestmögliche Reinigungslösung erhalten.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={8} md={12}>
            <h2>Unser Reinigungsdienst</h2>
            <p>
              Unser Reinigungsdienst ist darauf spezialisiert, hochwertige
              Reinigungslösungen anzubieten, die auf Ihre Bedürfnisse
              zugeschnitten sind. Mit einem Engagement für Exzellenz sorgt unser
              erfahrenes Team dafür, dass jede Oberfläche glänzt und jede Ecke
              funkelt. Vertrauen Sie uns, um eine saubere und einladende
              Umgebung zu schaffen, damit Sie sich auf das Wesentliche
              konzentrieren können.
            </p>
            <Image src={UmImage} className="img-responsive w-100" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3> Hervorragender Kundenservice</h3>
            <p>
              Hervorragender Kundenservice: Bei uns steht der Kunde immer im
              Mittelpunkt. Wir legen großen Wert auf exzellenten Kundenservice
              und streben danach, Ihre Erwartungen zu übertreffen. Unser
              freundliches und kompetentes Team steht Ihnen jederzeit zur
              Verfügung, um Ihre Fragen zu beantworten, Ihre Anliegen zu klären
              und sicherzustellen, dass Sie mit unseren Dienstleistungen
              vollkommen zufrieden sind. Wenn Sie sich für uns entscheiden,
              erhalten Sie nicht nur erstklassige Reinigungsdienstleistungen,
              sondern auch einen hervorragenden Kundenservice, auf den Sie sich
              verlassen können.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
