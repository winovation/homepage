import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div>
      <Container className="about">
        <Row>
          <Col lg={8} className="about-branding">
            <Row>
              <h2>Key Members</h2>
              <h5>
                위노아이는 치과의사, 빅데이터 전문가, HW 개발자 등 각 분야에
                전문가가 포진해 있기 때문에 구강카메라와 의료영상분석이 혼합
                구성된 솔루션을 개발하기 위한 노하우가 축적되어 있습니다.
              </h5>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
