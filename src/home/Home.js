import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import brandingProductImage from "../images/branding_product.png";
import productFeature1 from "../images/product_feature1.png";
import productFeature2 from "../images/product_feature2.png";
import productFeature3 from "../images/product_feature3.png";
import prVideo from "../images/pr.mp4";
import prImage from "../images/pr.png";

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
        <Row className="product-feature">
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={productFeature1} alt=""></img>
              <h2>전악 촬영</h2>
              <h5>
                사용자 편의성을 고려하여 손쉽게 구강내 전악 촬영 가능하여
                전체치아 분석과 개별치아 분석이 동시에 가능함
              </h5>
            </Row>
          </Col>
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={productFeature2} alt=""></img>
              <h2>셀프 촬영</h2>
              <h5>
                촬영 가이드를 제시하여 고화질의 통일성 있는 구강 사진 촬영이
                가능하며 데이터를 실시간으로 분석하여 제공함
              </h5>
            </Row>
          </Col>
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={productFeature3} alt=""></img>
              <h2>일관성</h2>
              <h5>
                일관성 있는 데이터 획득하여 지속적으로 분석 정확도를 향상시키며
                시간에 따른 변화를 감지하여 분석함
              </h5>
            </Row>
          </Col>
        </Row>
        <Row className="pr-video">
          <video controls poster={prImage} width="100%" height="40%">
            <source src={prVideo} type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </video>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
