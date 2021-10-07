import { Button, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container>
      <Row className="footer">
        <Button
          className="footer-button"
          variant="primary"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ⬆️
          <br /> BACK TO TOP
        </Button>
        <h5>Copyright ⓒ 2021 WINOVATION, All rights reserved.</h5>
      </Row>
    </Container>
  );
}

export default Footer;
