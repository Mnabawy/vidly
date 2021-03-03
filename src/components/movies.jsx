import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

   state = {
      movies: getMovies(),
   }

   handleDelete = (movie) => {

      let movies = this.state.movies;
      let filteredMovies = movies.filter(m => m._id !== movie._id);
      this.setState({ movies: filteredMovies })
   }

   render() {
      const { length: count } = this.state.movies
      if (count === 0) return 'there is no movies in the database';

      return (
         <div className="container">
            <h1>showing {count} movies in the database</h1>
            <table className="table">
               <thead style={{ textAlign: "left" }}>
                  <tr>
                     <th scope="col">Title</th>
                     <th scope="col">Genre</th>
                     <th scope="col">Stock</th>
                     <th scope="col">Rate</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody style={{ textAlign: "left" }}>
                  {this.state.movies.map(movie => {
                     return (
                        <tr key={movie._id}>
                           <td style={{ textAlign: "left" }}>{movie.title}</td>
                           <td>{movie.genre.name}</td>
                           <td>{movie.numberInStock}</td>
                           <td>{movie.dailyRentalRate}</td>
                           <button className="btn btn-danger m-2" onClick={
                              () => this.handleDelete(movie)
                           }>Delete</button>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Movies;