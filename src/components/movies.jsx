import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/paginatoin";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    console.log(movie);
    let movies = this.state.movies;
    let filteredMovies = movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: filteredMovies });
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ currentPage: 1, selectedGenre: genre });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: moviesList,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
    } = this.state;

    if (count === 0) return "there is no movies in the database";

    const filetred =
      selectedGenre && selectedGenre._id
        ? moviesList.filter((movie) => movie.genre._id === selectedGenre._id)
        : moviesList;

    const sortedList = _.orderBy(
      filetred,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedList, currentPage, pageSize);

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <h1>showing {count} movies in the database</h1>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              currentPage={currentPage}
              itemsCount={filetred.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
