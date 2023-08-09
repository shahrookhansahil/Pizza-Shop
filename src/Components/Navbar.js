import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// import app.css
import "../App.css";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  shadow-lg p-3 mb-5 bg-body rounded">
      <h3>Pizza Shop</h3>
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Log In
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
