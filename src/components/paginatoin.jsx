import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Pagination extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    moviesPerPage: 3,
  };

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { movies, moviesPerPage } = this.state;

    // logic for displayin page number
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <li
          className="page-link"
          key={number}
          id={number}
          onClick={this.props.handlePagination}
        >
          {number}
        </li>
      );
    });

    return (
      <nav aria-label="...">
        <ul className="pagination pagination-lg">{renderPageNumbers}</ul>
      </nav>
    );
  }
}

export default Pagination;
