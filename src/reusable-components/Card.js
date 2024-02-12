import { Card } from "react-bootstrap";
import "./card.css";

function CardComponent({ title, text, img, goTo, linkText, activeCard }) {
  return (
    <Card className="custom-card w-100 mx-0 mx-lg-3 h-100">
      <Card.Img variant="top" className="card-image-max" src={img} />
      <Card.Body>
        <Card.Link>
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        <Card.Text className="card-text-max">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
