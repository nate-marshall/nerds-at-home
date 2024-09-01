import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2024 Nerds At Home. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
