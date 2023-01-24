import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const linkedInLink = "https://www.linkedin.com/in/williampotocki/";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container className="contact-bx">
        <Row className="align-items-center">
          <Col>
            <div>
              <h2>What’s Next?</h2>
              <h1>{`Get In Touch`}</h1>
              <p>
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!{" "}
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
