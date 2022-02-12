import { Button, Card } from "react-bootstrap";

const Item = ({ nombre, precio, img, descripcion }) => {
  return (
    <>
      <div className="grid">
        <Card style={{ width: "15rem", margin: "1rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text>{precio}</Card.Text>
            <Button variant="primary">Mas detalles</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Item;
