import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const linkedInLink = "https://www.linkedin.com/in/williampotocki/";

export const Banner = () => {
  return (
    <section className="banner" id="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={10} xl={8}>
            <div>
              <h2>Hi, my name is</h2>
              <h1>
                {`William Potocki`}
                <Row>
                  <span className="job-tagline">I build digital products.</span>
                </Row>
              </h1>
              <p>
                As a product manager with 7+ years of combined experience in the
                field of product management and analytics, I am a master at
                building digital products and solutions. Possessing a unique
                combination of strong business acumen and technical expertise, I
                excel in creating product strategies and leading
                cross-functional teams to drive business growth.{" "}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(linkedInLink, "_blank");
                }}
              >
                {" "}
                Let's connect <ArrowRightCircle size={25}></ArrowRightCircle>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
