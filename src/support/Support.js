import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./Support.css";
import MapContainer from "../components/MapContainer.js";
import ContactForm from "../components/ContactForm.js";

function Support() {
  return (
    <div>
      <Container className="support">
        <Row className="support-address">
          <h2>회사 주소</h2>
          <p>서울특별시 서대문구 연세로2나길 61 캠퍼스타운 에스큐브 403호</p>
          <div className="map">
            <MapContainer />
          </div>
        </Row>
        <Row className="support-contact">
          <h2>Contact us</h2>
          <p>회사 대표 이메일 : help@winoi.net</p>
          <div className="support-form">
            <ContactForm />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Support;
