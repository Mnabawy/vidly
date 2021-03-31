import "./App.css";
import NabBar from "../src/components/common/navbar";
import Movies from "../src/components/movies";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Rentals from "../src/components/rentals";
import Customers from "../src/components/customers";
import NotFound from "../src/components/notfound";
import MovieForm from "../src/components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <Router>
      <NabBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />

          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
