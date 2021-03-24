import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/paginatoin";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
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
    this.setState({currentPage:1, selectedGenre: genre });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: moviesList,
      pageSize,
      currentPage,
      selectedGenre,
    } = this.state;

    if (count === 0) return "there is no movies in the database";

    const filetred =
      selectedGenre && selectedGenre._id
        ? moviesList.filter((movie) => movie.genre._id === selectedGenre._id)
        : moviesList;

    const movies = paginate(filetred, currentPage, pageSize);

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
            <table className="table">
              <thead style={{ textAlign: "left" }}>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody style={{ textAlign: "left" }}>
                {movies.map((movie, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: "left" }}>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={movie.liked}
                          onClick={() => this.handleLike(movie)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(movie)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
