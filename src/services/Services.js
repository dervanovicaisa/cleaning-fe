import CardComponent from "../reusable-components/Card";
import "./services.css";
import WinterCleaningImg from "../assets/winterdienst.webp";
import WindowCleaningImg from "../assets/glasreinigung.jpg";
import OfficeCleaningImg from "../assets/büroreinigung.jpg";
import CarpetCleaningImg from "../assets/teppichreinigung.jpeg";
import CleaningServiceImg from "../assets/reinigung.jpg";
import ConstructionCleaningImg from "../assets/baureinigung-aufmacher.jpg";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
function Services() {
  let [activeCard, setActiveCard] = useState(3);
  const slideLeft = () => {
    if (activeCard >= 3) {
      if (activeCard === 3) {
        activeCard = 4;
      } else {
        activeCard = activeCard - 1;
      }
      console.log({ activeCard });

      setActiveCard(activeCard);
    }
  };
  const slideRight = () => {
    activeCard = activeCard + 1;
    if (activeCard === 5) {
      activeCard = 3;
    }
    console.log({ activeCard });
    setActiveCard(activeCard);
  };
  return (
    <div id="Dienstleistungen" data-section>
      <Row className="align-items-center justify-content-around pb-5 w-90 m-auto">
        <Col
          lg={2}
          className="arrow-icons arrow-icons-left text-center d-lg-block d-none"
          onClick={() => slideLeft()}
        >
          <ChevronLeft className="arrow-icon-left" size={15} />
        </Col>
        <Col className="d-lg-block d-none">
          <Row className="align-items-center justify-content-center pt-5 pb-3 carousel">
            {activeCard === 3 ? (
              <Col>
                <Row>
                  <Col>
                    <CardComponent
                      title="Winterdienst"
                      text="Im Winter ist Sauberkeit nicht nur ein Luxus, sondern auch eine Notwendigkeit. Unser Winterdienst sorgt für begehbare Wege und die Sicherheit Ihrer Flächen. Gehen Sie sicher durch den Winter mit unserer Hilfe."
                      img={WinterCleaningImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />
                  </Col>
                  <Col>
                    <CardComponent
                      title="Glasreinigung"
                      text="Klare und glänzende Fenster verbessern nicht nur die Ästhetik Ihres Raumes, sondern vermitteln auch Sauberkeit und Ansehen. Unser Fensterreinigungsservice bietet Ihnen kristallklare Oberflächen, die Blicke auf sich ziehen und einen starken Eindruck hinterlassen. Kontaktieren Sie uns noch heute, um Glanz und Frische in Ihren Räumlichkeiten zu garantieren!"
                      img={WindowCleaningImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />
                  </Col>
                  <Col>
                    <CardComponent
                      title="Büroreinigung"
                      text="Ein frisches und ordentliches Büro schafft nicht nur eine angenehme Arbeitsumgebung, sondern fördert auch die Produktivität und Zufriedenheit der Mitarbeiter. Unser Büroreinigungsservice gewährleistet Sauberkeit und Hygiene, damit Sie sich voll und ganz auf Ihre Geschäftsziele konzentrieren können. Lassen Sie uns Ihr Büro zum Strahlen bringen, denn Sauberkeit ist nicht nur eine Wahl, sondern auch ein entscheidender Faktor für den Erfolg Ihres Unternehmens."
                      img={OfficeCleaningImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />
                  </Col>
                </Row>
              </Col>
            ) : activeCard === 4 || activeCard === 5 ? (
              <Col>
                <Row>
                  <Col>
                    <CardComponent
                      title="Teppichreinigung"
                      text="Teppichreinigung ist der Schlüssel zur Erhaltung der Schönheit und Langlebigkeit Ihrer Teppiche. Unsere professionellen Reinigungsdienste entfernen Schmutz, Flecken und Gerüche, sodass Ihre Teppiche frisch und wie neu aussehen. Gönnen Sie Ihren Teppichen die Pflege, die sie verdienen, und erleben Sie den Unterschied, den eine gründliche Reinigung machen kann."
                      img={CarpetCleaningImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />{" "}
                  </Col>
                  <Col>
                    <CardComponent
                      title="Reinigungsdienst"
                      text="Unser Reinigungsdienst bietet Ihnen professionelle Reinigungslösungen für ein sauberes und angenehmes Umfeld. Von Bürogebäuden über Wohnungen bis hin zu Gewerbeimmobilien kümmern wir uns um jede Oberfläche und jeden Winkel. Verlassen Sie sich auf unsere Expertise, um Ihre Räumlichkeiten strahlend sauber zu halten, damit Sie sich auf das Wesentliche konzentrieren können."
                      img={CleaningServiceImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />
                  </Col>
                  <Col>
                    <CardComponent
                      title="Baugrobreinigung"
                      text="Unsere Baugrobreinigung bietet eine gründliche Reinigung nach Baufertigstellung, um Ihren Neubau in einen einladenden und bewohnbaren Raum zu verwandeln. Wir beseitigen Bauschutt, Staub und andere Rückstände, um eine sichere und angenehme Umgebung zu schaffen. Vertrauen Sie unserer Erfahrung und Professionalität, um Ihr Bauprojekt zum erfolgreichen Abschluss zu bringen."
                      img={ConstructionCleaningImg}
                      goTo={"/"}
                      linkText={"Lernen Sie"}
                    />
                  </Col>
                </Row>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Col>
        <Col className="d-md-block d-lg-none">
          <Row className="align-items-center justify-content-center gap-3  pb-3 carousel">
            <Col>
              <CardComponent
                title="Winterdienst"
                text="Im Winter ist Sauberkeit nicht nur ein Luxus, sondern auch eine Notwendigkeit. Unser Winterdienst sorgt für begehbare Wege und die Sicherheit Ihrer Flächen. Gehen Sie sicher durch den Winter mit unserer Hilfe."
                img={WinterCleaningImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />
            </Col>
            <Col>
              <CardComponent
                title="Glasreinigung"
                text="Klare und glänzende Fenster verbessern nicht nur die Ästhetik Ihres Raumes, sondern vermitteln auch Sauberkeit und Ansehen. Unser Fensterreinigungsservice bietet Ihnen kristallklare Oberflächen, die Blicke auf sich ziehen und einen starken Eindruck hinterlassen. Kontaktieren Sie uns noch heute, um Glanz und Frische in Ihren Räumlichkeiten zu garantieren!"
                img={WindowCleaningImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />
            </Col>
            <Col>
              <CardComponent
                title="Büroreinigung"
                text="Ein frisches und ordentliches Büro schafft nicht nur eine angenehme Arbeitsumgebung, sondern fördert auch die Produktivität und Zufriedenheit der Mitarbeiter. Unser Büroreinigungsservice gewährleistet Sauberkeit und Hygiene, damit Sie sich voll und ganz auf Ihre Geschäftsziele konzentrieren können. Lassen Sie uns Ihr Büro zum Strahlen bringen, denn Sauberkeit ist nicht nur eine Wahl, sondern auch ein entscheidender Faktor für den Erfolg Ihres Unternehmens."
                img={OfficeCleaningImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />
            </Col>
            <Col>
              <CardComponent
                title="Teppichreinigung"
                text="Teppichreinigung ist der Schlüssel zur Erhaltung der Schönheit und Langlebigkeit Ihrer Teppiche. Unsere professionellen Reinigungsdienste entfernen Schmutz, Flecken und Gerüche, sodass Ihre Teppiche frisch und wie neu aussehen. Gönnen Sie Ihren Teppichen die Pflege, die sie verdienen, und erleben Sie den Unterschied, den eine gründliche Reinigung machen kann."
                img={CarpetCleaningImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />{" "}
            </Col>
            <Col>
              <CardComponent
                title="Reinigungsdienst"
                text="Unser Reinigungsdienst bietet Ihnen professionelle Reinigungslösungen für ein sauberes und angenehmes Umfeld. Von Bürogebäuden über Wohnungen bis hin zu Gewerbeimmobilien kümmern wir uns um jede Oberfläche und jeden Winkel. Verlassen Sie sich auf unsere Expertise, um Ihre Räumlichkeiten strahlend sauber zu halten, damit Sie sich auf das Wesentliche konzentrieren können."
                img={CleaningServiceImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />
            </Col>
            <Col>
              <CardComponent
                title="Baugrobreinigung"
                text="Unsere Baugrobreinigung bietet eine gründliche Reinigung nach Baufertigstellung, um Ihren Neubau in einen einladenden und bewohnbaren Raum zu verwandeln. Wir beseitigen Bauschutt, Staub und andere Rückstände, um eine sichere und angenehme Umgebung zu schaffen. Vertrauen Sie unserer Erfahrung und Professionalität, um Ihr Bauprojekt zum erfolgreichen Abschluss zu bringen."
                img={ConstructionCleaningImg}
                goTo={"/"}
                linkText={"Lernen Sie"}
              />
            </Col>
          </Row>
        </Col>
        <Col
          lg={2}
          className="arrow-icons arrow-icons-right text-center d-lg-block d-none"
          onClick={() => slideRight()}
        >
          <ChevronRight size={15} className="arrow-icon-right" />
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default Services;
