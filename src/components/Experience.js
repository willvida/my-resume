import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { isMobile } from "react-device-detect";
import { ReactComponent as WorkIcon } from "../assets/img/WorkIcon.svg";
import { ReactComponent as SchoolIcon } from "../assets/img/SchoolIcon.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <h2>Where I’ve Worked</h2>
            <VerticalTimeline animate={isMobile ? false : true}>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showLabel =
                  element.labelText !== undefined &&
                  element.labelText !== null &&
                  element.labelText !== "";
                let showLabel2 =
                  element.labelText2 !== undefined &&
                  element.labelText2 !== null &&
                  element.labelText2 !== "";
                let showLabel3 =
                  element.labelText3 !== undefined &&
                  element.labelText3 !== null &&
                  element.labelText3 !== "";
                let showLabel4 =
                  element.labelText4 !== undefined &&
                  element.labelText4 !== null &&
                  element.labelText4 !== "";
                let showLabel5 =
                  element.labelText5 !== undefined &&
                  element.labelText5 !== null &&
                  element.labelText5 !== "";
                console.log(isMobile);
                if (isMobile) {
                  return (
                    <VerticalTimelineElement
                      key={element.id}
                      date={element.date}
                      location="location"
                      dateClassName="date"
                      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                      </h5>
                      <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                  );
                } else {
                  return (
                    <VerticalTimelineElement
                      key={element.id}
                      date={element.date}
                      location="location"
                      dateClassName="date"
                      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                      </h5>
                      <p id="description">{element.description}</p>
                      <div className="labels">
                        {showLabel && (
                          <button className="expertise-label">
                            {element.labelText}
                          </button>
                        )}
                        {showLabel2 && (
                          <span className="expertise-label">
                            {element.labelText2}
                          </span>
                        )}
                        {showLabel3 && (
                          <span className="expertise-label">
                            {element.labelText3}
                          </span>
                        )}
                        {showLabel4 && (
                          <span className="expertise-label">
                            {element.labelText4}
                          </span>
                        )}
                        {showLabel5 && (
                          <span className="expertise-label">
                            {element.labelText5}
                          </span>
                        )}
                      </div>
                    </VerticalTimelineElement>
                  );
                }
              })}
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
