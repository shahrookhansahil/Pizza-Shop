import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// import app.css
import "../App.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarText">
        <h3>Pizza Shop</h3>

        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
