import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin-icon.svg";
import navIcon2 from "../assets/img/github-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}></Col>
          <Col sm={6} className="text-center text-sm-end">
            <nav className="social-icon">
              <a href="https://www.linkedin.com/in/williampotocki/">
                <img
                  src={navIcon1}
                  alt="linkedin"
                  aria-label="LinkedIn Profile"
                />
              </a>
              <a href="https://github.com/willvida/">
                <img src={navIcon2} alt="github" aria-label="Github Profile" />
              </a>
            </nav>
            <p>
              Copyright {new Date().getFullYear()}. All Rights Reserved by
              William Potocki
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
