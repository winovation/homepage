import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import "./components/NavbarTop.js";
import NavbarTop from "./components/NavbarTop.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import Home from "./home/Home.js";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Container>
        <Row>
          <Home />
        </Row>
      </Container>
    </div>
  );
}

export default App;
