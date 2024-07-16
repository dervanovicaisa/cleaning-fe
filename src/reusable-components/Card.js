import { Card } from "react-bootstrap";
import "./card.css";

function CardComponent({ title, text, img, goTo, linkText, activeCard }) {
  return (
    <Card className="custom-card w-100 mx-0 mx-lg-3 h-100">
      <Card.Img variant="top" className="card-image-max" src={img} />
      <Card.Body>
        <Card.Link className="m-auto p-1 text-center w-100">
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        <hr />
        <div className="card-body-inner">
          <Card.Text className="card-text-max">{text}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
