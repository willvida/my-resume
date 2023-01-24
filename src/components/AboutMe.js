import { Container, Row, Col } from "react-bootstrap";
import rocket from "../assets/img/rocket.svg";
import analytics from "../assets/img/analytics.svg";
import consulting from "../assets/img/consulting.svg";
import blockchain from "../assets/img/blockchain.svg";
import colorSharp from "../assets/img/color-sharp.png";
import profilepic from "../assets/img/ai-profile-pic.jpg";

export const AboutMe = () => {
  return (
    /* OVERVIEW OF SKILLS */
    <section className="aboutme" id="aboutme">
      <Container>
        <div className="aboutme-bx">
          <Row>
            <h2>About Me</h2>
          </Row>
          <Row className="aboutme-txt align-items-center">
            <Col>
              <p>
                Hello there! My name is William and I am passionate about
                building digital products, analytics solutions and using
                technology to improve businesses. I believe that technology can
                be a powerful force for good and I am always on the lookout for
                new and innovative ways to leverage it.
              </p>
              <p>
                I have worked in a variety of roles throughout my career,
                including as an analytics consultant, management consultant, and
                product manager. Through these experiences, I have developed a
                strong set of skills including data analysis, project
                management, problem-solving, business strategy, and product
                development. I am also an expert in identifying and
                understanding the needs of customers and stakeholders, and I am
                always working to find ways to improve their experience.{" "}
              </p>
              <p>
                I am also excited to share that I have recently started a crypto
                and blockchain community. My passion for this field of
                technology and my desire to improve the ways in which businesses
                use it has led me to take an active role in promoting the
                benefits of this technology and helping others to understand it.
              </p>
            </Col>
            <Col xs={"auto"} md={"auto"} xl={4}>
              <img className="profilepic" src={profilepic} alt="Profile Img" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={"6"} md={"3"} xl={3}>
              <div className="item">
                <img src={rocket} alt="Skill image" />
                <h5>Product</h5>
              </div>
            </Col>
            <Col xs={"6"} md={"3"} xl={3}>
              <div className="item">
                <img src={analytics} alt="Skill image" />
                <h5>Analytics</h5>
              </div>
            </Col>
            <Col xs={"6"} md={"3"} xl={3}>
              <div className="item">
                <img src={consulting} alt="Skill image" />
                <h5>Technology Consulting</h5>
              </div>
            </Col>
            <Col xs={"6"} md={"3"} xl={3}>
              <div className="item">
                <img src={blockchain} alt="Skill image" />
                <h5>Blockchain</h5>
              </div>
            </Col>
          </Row>

          <section className="detail-skill" id="detail-skills">
            <Row className="mt-4">
              <h3 className="skills-header-mobile">Technical Skills</h3>
              <Col>
                <div className="detail-skill-category-bx">
                  <div className="mt-4 detail-skill-bx">
                    <div className="detail-skill-title">
                      BI / Analytics Tools: SQL, PowerBI etc.
                    </div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per sql"></span>
                    </div>
                  </div>
                  <div className="detail-skill-title">
                    HTML, CSS, JavaScript{" "}
                  </div>
                  <div className="detail-skill-bx">
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per webdev"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">
                      React.js, Node.js, Express
                    </div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per jslib"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">Python</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per python"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">Solidity</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per solidity"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">MongoDB</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per mongodb"></span>
                    </div>
                  </div>
                </div>
              </Col>
              <h3 className="mt-4 skills-header-mobile">Languages</h3>
              <Col>
                <div className="detail-skill-category-bx">
                  <div className="mt-4 detail-skill-bx">
                    <div className="detail-skill-title">English</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per english"></span>
                    </div>
                  </div>
                  <div className="detail-skill-title">Swedish</div>
                  <div className="detail-skill-bx">
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per swedish"></span>
                    </div>
                  </div>
                  <div className="detail-skill-title">German</div>
                  <div className="detail-skill-bx">
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per german"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">Polish</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per polish"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">Serbian</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per serbian"></span>
                    </div>
                  </div>
                  <div className="detail-skill-bx">
                    <div className="detail-skill-title">Spanish</div>
                    <div className="mb-2 detail-skill-bar">
                      <span className="detail-skill-per spanish"></span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
