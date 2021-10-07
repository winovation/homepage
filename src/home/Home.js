import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import brandingProductImage from "../images/branding_product.png";

function Home() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}

export default Home;
