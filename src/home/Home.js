import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import brandingProductImage from "../images/branding_product.png";

function Home() {
  return (
    <div>
      <Container className="home">
        <Row>
          <Col lg={7}>
            <Row>
              <div className="branding">
                <h5>WINOi DENPIC</h5>
                <h2>The Best Daily Dental Care Solution</h2>
                <h5>
                  덴픽은 데일리 구강케어에 가장 적합한 솔루션을 제공합니다.
                  <br />
                  매일 구강 사진을 찍고 시간에 따른 변화를 확인해보세요.
                </h5>
                <Button
                  variant="primary"
                  className="btn-primary"
                  as={Link}
                  to="/product"
                >
                  자세히 보기 &nbsp;&nbsp;&nbsp;&nbsp;〉
                </Button>
              </div>
            </Row>
          </Col>
          <Col lg={5}>
            <img
              width="100%"
              height="auto"
              src={brandingProductImage}
              alt=""
            ></img>
          </Col>
        </Row>
        <Row className="main-text">
          <Col lg={6}>
            <h2>Why Denpic</h2>
            <h5>
              사람들은 치아에 통증을 느낀 후 치료의 목적으로 치과를 방문하는
              경우가 대부분입니다. 그래서 위노아이는 치아 통증을 느끼기 전에
              치아를 관리하고 치아 질환을 예방할 수 있는 방법을 생각했습니다. 그
              결과, 위노아이는 덴픽이라는 보급형 구강관리기기와 AI 분석을 통한
              구강질환 자가 검진 솔루션을 개발하였습니다. 사용자들이 언제
              어디서든 자신의 치아 상태를 확인하고, 미리 치아 관련 질환들을
              예방하고, 방지하여 건강한 치아를 유지할 수 있도록 하였습니다.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
