import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./components/NavbarTop.js";
import NavbarTop from "./components/NavbarTop.js";
import Home from "./home/Home.js";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/">
          Product
        </Route>
        <Route exact path="/about/">
          About Us
        </Route>
        <Route exact path="/support/">
          Support
        </Route>
      </Switch>
    </div>
  );
}

export default App;
