import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./Product.css";
import brandingProductImage from "../images/branding_product.png";
import takePicture1 from "../images/take_picture1.png";
import takePicture2 from "../images/take_picture2.png";
import takePicture3 from "../images/take_picture3.png";
import howToUse1 from "../images/how_to_use1.png";
import howToUse2 from "../images/how_to_use2.png";
import howToUse3 from "../images/how_to_use3.png";
import mainFeature1 from "../images/main_feature1.png";
import mainFeature2 from "../images/main_feature2.png";
import mainFeature3 from "../images/main_feature3.png";
import mainFeature4 from "../images/main_feature4.png";
import mainFeature5 from "../images/main_feature5.png";
import valueProposition1 from "../images/value_proposition1.png";
import valueProposition2 from "../images/value_proposition2.png";
import valueProposition3 from "../images/value_proposition3.png";
import valueProposition4 from "../images/value_proposition4.png";

function Product() {
  return (
    <div>
      <Container className="product">
        <Row>
          <Col lg={5} className="product-branding">
            <Row>
              <h2>DENPIC</h2>
              <h5>
                “DENPIC은 치과의료의 전문지식 없이 누구나 쉽게 일상 생활속에서
                치아 질환의 조기 발견 및 예방을 가능하게 해주는 체계적인
                구강관리를 가능하게 해주는 솔루션입니다”
              </h5>
            </Row>
          </Col>
          <Col lg={7}>
            <img
              width="80%"
              height="auto"
              src={brandingProductImage}
              alt=""
            ></img>
          </Col>
        </Row>
        <Row className="product-feature">
          <h2>Take a picture with DENPIC</h2>
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={takePicture1} alt=""></img>
            </Row>
          </Col>
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={takePicture2} alt=""></img>
            </Row>
          </Col>
          <Col className="product-feature__padding" lg={4}>
            <Row>
              <img src={takePicture3} alt=""></img>
            </Row>
          </Col>
        </Row>
        <Row className="title">
          <Col lg={7}>
            <h2>DENPIC</h2>
            <h5>
              “DENPIC은 치과의료의 전문지식 없이 누구나 쉽게 일상 생활속에서
              치아 질환의 조기 발견 및 예방을 가능하게 해주는 체계적인
              구강관리를 가능하게 해주는 솔루션입니다”
            </h5>
          </Col>
        </Row>
        <Row className="how-to-use">
          <Col lg={4}>
            <Row className="how-to-use__padding">
              <div className="img-width-control">
                <img src={howToUse1} width="50%" alt="" />
              </div>
              <h2>Step 1</h2>
              <h5>어플리케이션 다운로드 후 회원 가입 진행</h5>
            </Row>
          </Col>
          <Col lg={4}>
            <Row className="how-to-use__padding">
              <div className="img-width-control">
                <img src={howToUse2} width="100%" alt="" />
              </div>
              <h2>Step 2</h2>
              <h5>덴픽 연결 후 가이드라인에 맞춰 상/하악 촬영</h5>
            </Row>
          </Col>
          <Col lg={4}>
            <Row className="how-to-use__padding">
              <div className="img-width-control">
                <img src={howToUse3} width="50%" alt="" />
              </div>
              <h2>Step 3</h2>
              <h5>분석된 데이터를 실시간으로 확인하여 치아 상태 확인</h5>
            </Row>
          </Col>
        </Row>
        <Row className="title">
          <Col lg={7}>
            <h2>Main features</h2>
          </Col>
        </Row>
        <Row className="main-features">
          <Col lg={6}>
            <img src={mainFeature1} alt=""></img>
            <div className="main-features-text">
              <p>AI 분석을 통한 구강질환&nbsp;</p> <h6>자가 검진이 가능함</h6>
            </div>
          </Col>
          <Col lg={6}>
            <img src={mainFeature2} alt=""></img>
            <div className="main-features-text">
              <p>손쉽게&nbsp;</p> <h6>질환의 진행 정도를 파악&nbsp;</h6>
              <p>할 수 있음</p>
            </div>
          </Col>
        </Row>
        <Row className="main-features">
          <Col lg={4}>
            <img src={mainFeature3} width="10%" alt=""></img>
            <div className="main-features-text">
              <p>정량형광기법(QLF) 기술을 활용하여&nbsp;</p>
              <h6>매일 구강 청결상태 확인 가능함</h6>
            </div>
          </Col>
          <Col lg={4}>
            <img src={mainFeature4} alt=""></img>
            <div className="main-features-text">
              <p>분석된 데이터는 서버에 저장되어&nbsp;</p>
              <h6>실시간 비교 및 확인 가능함</h6>
            </div>
          </Col>
          <Col lg={4}>
            <img src={mainFeature5} alt=""></img>
            <div className="main-features-text">
              <h6>일관성 있는 데이터 확보</h6>
              <p>가 가능하여&nbsp;</p>
              <h6>분석 정확도를 계속해서 향상</h6>
              <p>시킴</p>
            </div>
          </Col>
        </Row>
        <Row className="title">
          <Col lg={7}>
            <h2>Value Proposition</h2>
          </Col>
        </Row>
        <Row className="main-features">
          <Col lg={3}>
            <img src={valueProposition1} alt=""></img>
            <h5>치아 질환의 조기 발견 및 예방 가능</h5>
          </Col>
          <Col lg={3}>
            <img src={valueProposition2} alt=""></img>
            <h5>증상 악화에 따른 치료 비용의 절감</h5>
          </Col>
          <Col lg={3}>
            <img src={valueProposition3} alt=""></img>
            <h5>전문적인 지식 없이 치아 관리가 용이함</h5>
          </Col>
          <Col lg={3}>
            <img src={valueProposition4} alt=""></img>
            <h5>시간적, 경제적, 지리적 제약 없이 관리 가능</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
