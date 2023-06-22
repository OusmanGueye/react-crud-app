import logo from "./logo.svg";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/Home"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Products"}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/NewProduct"}>
              New Product
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/NewProduct" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
