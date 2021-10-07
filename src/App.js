import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import "./components/NavbarTop.js";
import NavbarTop from "./components/NavbarTop.js";

function App() {
  return (
    <div className="App">
      <NavbarTop />
    </div>
  );
}

export default App;
