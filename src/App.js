import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./components/NavbarTop.js";
import NavbarTop from "./components/NavbarTop.js";
import Home from "./home/Home.js";
import Footer from "./components/Footer";
import Product from "./product/Product.js";
import About from "./about/About.js";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/">
          <Product />
        </Route>
        <Route exact path="/about/">
          <About />
        </Route>
        <Route exact path="/support/">
          Support
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
