import { Card, Placeholder } from 'react-bootstrap';

const LoadingCard = () => {
  return (
    <div className="col">
      <Card className="text-start course-card" style={{ width: "14rem", padding: "0" }}>
        <div style={{ width: "100%", height: "7rem", padding: "0" }}>
          <Placeholder as="div" animation="wave">
            <Placeholder style={{ width: "100%", height: "100%", borderRadius: "0" }} />
          </Placeholder>
        </div>
        <Card.Body style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <Placeholder as={Card.Title} animation="wave" className="mb-2">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="wave" className="mb-1">
            <Placeholder xs={4} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="wave">
            <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoadingCard;
