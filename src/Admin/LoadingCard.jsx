import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const LoadingCard = () => {
  return (
    <div className="col">
      <Card className="text-start course-card" style={{ width: '14rem', padding: '0' }}>
        <Card.Img
          variant="top"
          style={{ height: '150px', backgroundColor: '#e9ecef' }}
        
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} />
            <Placeholder xs={10} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={9} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoadingCard;
