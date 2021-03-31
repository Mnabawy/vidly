import React from "react";

import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Movies from "../movies";
import Rentals from "../rentals";
import Customers from "../customers";
import NotFound from "../notfound";
import MovieForm from "../movieForm";

const NabBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          Vidly
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavdasdsa">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>


            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NabBar;
